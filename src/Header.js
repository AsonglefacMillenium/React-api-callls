import React from 'react';
import "./App.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">


<ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/statetoggle">StateToggle</Link></li>
    <li><Link to="/axios">AXIOS</Link></li>
</ul>
            
        </div>
    )
}

export default Header
