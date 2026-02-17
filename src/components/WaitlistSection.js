import React, { useState, useEffect } from 'react';

const FORMSPREE_ENDPOINT =
  process.env.REACT_APP_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xojqydrz';

function formatCount(count) {
  if (count === null) return '';
  return count.toLocaleString('en-US');
}

function WaitlistSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const [waitlistCount, setWaitlistCount] = useState(null);

  useEffect(() => {
    const fetchWaitlistCount = async () => {
      try {
        const response = await fetch('/api/waitlist-count');
        if (response.ok) {
          const data = await response.json();
          const apiCount = data.count || 0;
          if (apiCount > 0) {
            setWaitlistCount(apiCount);
            localStorage.setItem('nirvalis_waitlist_count', apiCount.toString());
          } else {
            const cachedCount = localStorage.getItem('nirvalis_waitlist_count');
            setWaitlistCount(cachedCount ? parseInt(cachedCount, 10) : 0);
          }
        } else {
          const cachedCount = localStorage.getItem('nirvalis_waitlist_count');
          setWaitlistCount(cachedCount ? parseInt(cachedCount, 10) : 0);
        }
      } catch {
        const cachedCount = localStorage.getItem('nirvalis_waitlist_count');
        setWaitlistCount(cachedCount ? parseInt(cachedCount, 10) : 0);
      }
    };

    fetchWaitlistCount();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          _subject: 'New Waitlist Signup - Nirvalis',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage("Thank you for joining the waitlist! We'll be in touch soon.");
        setEmail('');
        setWaitlistCount((prev) => {
          const newCount = prev !== null ? prev + 1 : 1;
          localStorage.setItem('nirvalis_waitlist_count', newCount.toString());
          return newCount;
        });
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Failed to submit');
      }
    } catch (error) {
      setStatus('error');
      setMessage(
        error.message || 'Something went wrong. Please try again or contact us directly.'
      );
      console.error('Waitlist submission error:', error);
    }
  };

  return (
    <section className="waitlist-section" id="newsletter">
      <p className="waitlist-intro">
        Be the first to experience Nirvalis. We're opening our private beta soon.
      </p>
      <h2 className="waitlist-title">Join the Nirvalis Waitlist</h2>
      {waitlistCount !== null && waitlistCount > 0 && (
        <p className="waitlist-count">
          Join {formatCount(waitlistCount)} {waitlistCount === 1 ? 'other' : 'others'} on the
          waitlist
        </p>
      )}
      <form className="waitlist-form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="email-input"
          placeholder="Your email address (required)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === 'loading'}
          aria-label="Email address"
        />
        <button
          type="submit"
          className="join-button"
          disabled={status === 'loading' || status === 'success'}
        >
          {status === 'loading'
            ? 'Joining...'
            : status === 'success'
            ? 'Joined!'
            : 'Join the Waitlist'}
        </button>
        {message && (
          <div
            className={`waitlist-message ${status === 'success' ? 'success' : 'error'}`}
            role="status"
          >
            {message}
          </div>
        )}
      </form>
      <p className="waitlist-privacy">
        By joining, you agree to receive updates about Nirvalis. We respect your privacy.
      </p>
    </section>
  );
}

export default WaitlistSection;
