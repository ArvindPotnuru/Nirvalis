import React from 'react';
import './App.css';

import {
  Header,
  Hero,
  VideoSection,
  Section,
  PartnersSection,
  FeaturesSection,
  BenefitsList,
  WaitlistSection,
  Footer,
} from './components';

function App() {
  return (
    <div className="App">
      <Header />

      <main className="main-content">
        <Hero />
        <VideoSection />

        <Section title="What is Nirvalis?" signature="A&A">
          <p className="section-text">
            Nirvalis is your health intelligence partner, designed to provide preventive,
            ongoing care through a member-owned health graph. We interpret medical,
            metabolic, mental, and physical signals to give you a comprehensive view of
            your health, empowering you to take control of your wellness journey.
          </p>
        </Section>

        <PartnersSection />
        <FeaturesSection />

        <Section title="Why Nirvalis Exists?">
          <p className="section-text">
            Today's healthcare system is fragmented and confusing. Health data is
            scattered across multiple providers, making it difficult to get a complete
            picture of your wellness. Nirvalis exists to put health intelligence back in
            your hands, giving you a unified, member-owned health graph that grows with
            you throughout your life.
          </p>
        </Section>

        <Section title="What Nirvalis Can Do for You" titleLarge>
          <BenefitsList />
        </Section>

        <Section title="Who Nirvalis Is For">
          <p className="section-text">
            Nirvalis is for anyone who wants to take control of their health, prevent
            problems before they arise, navigate care with confidence, and maintain
            health independence. This includes early adopters, patients managing chronic
            conditions, caregivers, women's health advocates, those at chronic risk,
            longevity seekers, and health-conscious individuals who value proactive
            wellness.
          </p>
        </Section>

        <WaitlistSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
