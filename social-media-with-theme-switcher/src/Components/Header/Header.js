import React from 'react';

import './Header.css'

const Header = () => (
    <div className="container">
        <div className="flex">
        <div className="header">
          <h1>Social Media Dashboard</h1>
          <p>Total Followers: 23,004</p>
        </div>
        <div className="flex">
            <span>Dark Mode</span>
            <input type="checkbox" id="switch" /><label for="switch">Toggle</label>
        </div>
        </div>
    </div>
);

export default Header;