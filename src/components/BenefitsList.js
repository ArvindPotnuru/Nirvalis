import React from 'react';

const BENEFITS = [
  'Personalized daily health insights',
  'Metabolic, stress, and sleep interpretation',
  'AI-powered symptom intelligence',
  'Early risk signals for preventive care',
  'Simple navigation to next step',
  'Portable health graph everywhere',
];

function BenefitsList() {
  return (
    <div className="benefits-list">
      {BENEFITS.map((text) => (
        <div key={text} className="benefit-item">
          <div className="checkmark">✓</div>
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
}

export default BenefitsList;
