import React from 'react';

const PARTNERS = [
  { name: 'Meditech', icon: 'square' },
  { name: 'CareSync', icon: 'circle' },
  { name: 'HealthEra', icon: 'triangle' },
  { name: 'Pathway', icon: 'square' },
  { name: 'LifeBridge', icon: 'circle' },
];

function PartnersSection() {
  return (
    <section className="partners-section">
      <div className="partners-grid">
        {PARTNERS.map((partner) => (
          <div key={partner.name} className="partner-item">
            <div className={`partner-icon ${partner.icon}`} />
            <span>{partner.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PartnersSection;
