import React from 'react';
import { Link } from 'react-router';
import Footer from './Footer';

class Main extends React.Component{
  render(){
    return(
      <div className= "main-container">
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

module.exports = Main;
