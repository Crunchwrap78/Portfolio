import React from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component{
  render(){
    return(
      <ul className="inline">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Portfolio">Portfolio</Link></li>
      </ul>
    )
  }
}

module.exports = NavBar;
