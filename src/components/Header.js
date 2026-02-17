import React from 'react';

function Header() {
  return (
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
  );
}

export default Header;
