import React from 'react'
import './Header.css';

export default function Header() {
  return (
      <header className='header'>
          <div className="header__balance">
              <p className="header__balance-title">My balance</p>
              <h2 className="header__balance-amount">$921.48</h2>
          </div>
          <div className="header__circles">
              <div className="header__circles-item"></div>
              <div className="header__circles-item"></div>
          </div>
    </header>
  )
}
