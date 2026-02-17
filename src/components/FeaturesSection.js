import React from 'react';

const FEATURES = [
  {
    icon: 'triangle-large',
    title: 'Member-Owned Health Graph',
    description:
      'You control your lifelong, secure health data—portable, clinical, predictive.',
  },
  {
    icon: 'circle-large',
    title: 'Early Signal Detection',
    description:
      'Top-tier algorithms catch medical and physical shifts before symptoms appear, so you always stay ahead.',
  },
  {
    icon: 'square-large',
    title: 'Your First Health Advocate',
    description:
      'Ask. Analyze. Act. Your premium health assistant gives you clear steps to elevate your health—every day.',
  },
];

function FeaturesSection() {
  return (
    <section className="features-section" id="features">
      <div className="features-grid">
        {FEATURES.map((feature) => (
          <div key={feature.title} className="feature-block">
            <div className={`feature-icon ${feature.icon}`} />
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
