import React from 'react';

function Section({ title, titleLarge = false, signature, children }) {
  return (
    <section className="section">
      <h2 className={titleLarge ? 'section-title-large' : 'section-title'}>
        {title}
      </h2>
      {children}
      {signature && <div className="signature">{signature}</div>}
    </section>
  );
}

export default Section;
