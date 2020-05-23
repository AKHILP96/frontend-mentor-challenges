import React from 'react';

import './Header.css'

const Header = () => (
    <div className="container">
        <div>
          <h1>Social Media Dashboard</h1>
          <p>Total Followers: 23,004</p>
        </div>
        <div>
            <span>Dark Mode</span>
            <input type="checkbox" />
        </div>
    </div>
);

export default Header;