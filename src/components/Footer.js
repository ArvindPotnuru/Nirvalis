import React from 'react';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <span className="footer-founders">
            Founded by Amruthavalli Bethanabatla & Arvind Potnuru
          </span>
        </div>
        <div className="footer-right">
          Nirvalis™ Health Intelligence Partner © 2025-{year} Nirvalis Inc. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
