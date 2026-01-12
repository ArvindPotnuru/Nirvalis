import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // 'idle', 'loading', 'success', 'error'
  const [message, setMessage] = useState('');
  const [waitlistCount, setWaitlistCount] = useState(null); // null = loading, number = count

  // Fetch waitlist count on component mount
  useEffect(() => {
    const fetchWaitlistCount = async () => {
      try {
        // Try to fetch from API endpoint (works in production on Vercel)
        // This will work when deployed to Vercel
        const apiUrl = '/api/waitlist-count';
        const response = await fetch(apiUrl);
        
        if (response.ok) {
          const data = await response.json();
          const apiCount = data.count || 0;
          // Use API count if available, otherwise fallback to localStorage
          if (apiCount > 0) {
            setWaitlistCount(apiCount);
            localStorage.setItem('nirvalis_waitlist_count', apiCount.toString());
          } else {
            // Fallback: check localStorage for cached count
            const cachedCount = localStorage.getItem('nirvalis_waitlist_count');
            setWaitlistCount(cachedCount ? parseInt(cachedCount, 10) : 0);
          }
        } else {
          // Fallback: check localStorage for cached count
          const cachedCount = localStorage.getItem('nirvalis_waitlist_count');
          setWaitlistCount(cachedCount ? parseInt(cachedCount, 10) : 0);
        }
      } catch (error) {
        // API not available (e.g., local development), use localStorage
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
      // Formspree endpoint - using form ID directly
      const formspreeFormId = 'xojqydrz';
      const formspreeEndpoint = `https://formspree.io/f/${formspreeFormId}`;
      
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          _subject: 'New Waitlist Signup - Nirvalis',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Thank you for joining the waitlist! We\'ll be in touch soon.');
        setEmail('');
        // Increment waitlist count on successful submission
        setWaitlistCount(prev => {
          const newCount = (prev !== null ? prev + 1 : 1);
          // Cache in localStorage for persistence
          localStorage.setItem('nirvalis_waitlist_count', newCount.toString());
          return newCount;
        });
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Failed to submit');
      }
    } catch (error) {
      setStatus('error');
      setMessage(error.message || 'Something went wrong. Please try again or contact us directly.');
      console.error('Waitlist submission error:', error);
    }
  };

  // Format number with commas (e.g., 1234 -> 1,234)
  const formatCount = (count) => {
    if (count === null) return '';
    return count.toLocaleString('en-US');
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <img src="/logo-icon.svg" alt="Nirvalis" className="logo-icon" />
            <span className="logo-text">NIRVALIS</span>
          </div>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#newsletter">Newsletter</a>
          </nav>
        </div>
      </header>

      <main className="main-content">
        {/* Hero Section */}
        <section className="hero" id="home">
          <h1 className="hero-title">Nirvalis - Health Intelligence Partner</h1>
          <p className="hero-tagline">Your health. Your data. Your advocate.</p>
          <p className="hero-subtitle">
            Creating healthier generations, starting with you.
          </p>
          <p className="hero-description">
            An AI-powered health intelligence assistant that gives every member a lifelong, 
            member-owned health graph and catches early signals before symptoms surface.
          </p>
        </section>

        {/* Video Section */}
        <section className="video-section">
          <div className="video-container">
            <h2 className="video-section-title">See Nirvalis in Action</h2>
            <p className="video-section-subtitle">
              Discover how Nirvalis transforms your health journey
            </p>
            <div className="video-wrapper">
              <div className="video-embed">
                <iframe
                  allow="autoplay; gyroscope;"
                  allowFullScreen
                  referrerPolicy="strict-origin"
                  src="https://www.kapwing.com/e/69527fe767424051770dd42a"
                  title="Nirvalis - Health Intelligence Partner"
                  className="video-iframe"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* What is Nirvalis */}
        <section className="section">
          <h2 className="section-title">What is Nirvalis?</h2>
          <p className="section-text">
            Nirvalis is your health intelligence partner, designed to provide preventive, 
            ongoing care through a member-owned health graph. We interpret medical, metabolic, 
            mental, and physical signals to give you a comprehensive view of your health, 
            empowering you to take control of your wellness journey.
          </p>
          <div className="signature">A&A</div>
        </section>

        {/* Partners Section */}
        <section className="partners-section">
          <div className="partners-grid">
            <div className="partner-item">
              <div className="partner-icon square"></div>
              <span>Meditech</span>
            </div>
            <div className="partner-item">
              <div className="partner-icon circle"></div>
              <span>CareSync</span>
            </div>
            <div className="partner-item">
              <div className="partner-icon triangle"></div>
              <span>HealthEra</span>
            </div>
            <div className="partner-item">
              <div className="partner-icon square"></div>
              <span>Pathway</span>
            </div>
            <div className="partner-item">
              <div className="partner-icon circle"></div>
              <span>LifeBridge</span>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section" id="features">
          <div className="features-grid">
            <div className="feature-block">
              <div className="feature-icon triangle-large"></div>
              <h3 className="feature-title">Member-Owned Health Graph</h3>
              <p className="feature-description">
                You control your lifelong, secure health data—portable, clinical, predictive.
              </p>
            </div>
            <div className="feature-block">
              <div className="feature-icon circle-large"></div>
              <h3 className="feature-title">Early Signal Detection</h3>
              <p className="feature-description">
                Top-tier algorithms catch medical and physical shifts before symptoms appear, 
                so you always stay ahead.
              </p>
            </div>
            <div className="feature-block">
              <div className="feature-icon square-large"></div>
              <h3 className="feature-title">Your First Health Advocate</h3>
              <p className="feature-description">
                Ask. Analyze. Act. Your premium health assistant gives you clear steps to 
                elevate your health—every day.
              </p>
            </div>
          </div>
        </section>

        {/* Why Nirvalis Exists */}
        <section className="section">
          <h2 className="section-title">Why Nirvalis Exists?</h2>
          <p className="section-text">
            Today's healthcare system is fragmented and confusing. Health data is scattered 
            across multiple providers, making it difficult to get a complete picture of your 
            wellness. Nirvalis exists to put health intelligence back in your hands, giving 
            you a unified, member-owned health graph that grows with you throughout your life.
          </p>
        </section>

        {/* What Nirvalis Can Do for You */}
        <section className="section">
          <h2 className="section-title-large">What Nirvalis Can Do for You</h2>
          <div className="benefits-list">
            <div className="benefit-item">
              <div className="checkmark">✓</div>
              <span>Personalized daily health insights</span>
            </div>
            <div className="benefit-item">
              <div className="checkmark">✓</div>
              <span>Metabolic, stress, and sleep interpretation</span>
            </div>
            <div className="benefit-item">
              <div className="checkmark">✓</div>
              <span>AI-powered symptom intelligence</span>
            </div>
            <div className="benefit-item">
              <div className="checkmark">✓</div>
              <span>Early risk signals for preventive care</span>
            </div>
            <div className="benefit-item">
              <div className="checkmark">✓</div>
              <span>Simple navigation to next step</span>
            </div>
            <div className="benefit-item">
              <div className="checkmark">✓</div>
              <span>Portable health graph everywhere</span>
            </div>
          </div>
        </section>

        {/* Who Nirvalis Is For */}
        <section className="section">
          <h2 className="section-title">Who Nirvalis Is For</h2>
          <p className="section-text">
            Nirvalis is for anyone who wants to take control of their health, prevent problems 
            before they arise, navigate care with confidence, and maintain health independence. 
            This includes early adopters, patients managing chronic conditions, caregivers, 
            women's health advocates, those at chronic risk, longevity seekers, and 
            health-conscious individuals who value proactive wellness.
          </p>
        </section>

        {/* Waitlist Section */}
        <section className="waitlist-section" id="newsletter">
          <p className="waitlist-intro">
            Be the first to experience Nirvalis. We're opening our private beta soon.
          </p>
          <h2 className="waitlist-title">Join the Nirvalis Waitlist</h2>
          {waitlistCount !== null && waitlistCount > 0 && (
            <p className="waitlist-count">
              Join {formatCount(waitlistCount)} {waitlistCount === 1 ? 'other' : 'others'} on the waitlist
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
            />
            <button 
              type="submit" 
              className="join-button"
              disabled={status === 'loading' || status === 'success'}
            >
              {status === 'loading' ? 'Joining...' : status === 'success' ? 'Joined!' : 'Join the Waitlist'}
            </button>
            {message && (
              <div className={`waitlist-message ${status === 'success' ? 'success' : 'error'}`}>
                {message}
              </div>
            )}
          </form>
          <p className="waitlist-privacy">
            By joining, you agree to receive updates about Nirvalis. We respect your privacy.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <span className="footer-founders">Founded by Amruthavalli Bethanabatla & Arvind Potnuru</span>
          </div>
          <div className="footer-right">
            Nirvalis™ Health Intelligence Partner © 2025-{new Date().getFullYear()} Nirvalis Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

