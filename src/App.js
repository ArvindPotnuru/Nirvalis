import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Email submitted:', email);
    alert('Thank you for joining the waitlist!');
    setEmail('');
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
          <form className="waitlist-form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="email-input"
              placeholder="Your email address (required)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="join-button">
              Join the Waitlist
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">BBA</div>
          <div className="footer-right">
            Nirvalis™ Health Intelligence Partner © 2025 Nirvalis Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

