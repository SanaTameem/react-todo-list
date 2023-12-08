import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <h1 className="header-title">todos</h1>
      <p className="header-para">Items will persist in the browser local storage</p>
    </div>
  );
}
export default Header;
