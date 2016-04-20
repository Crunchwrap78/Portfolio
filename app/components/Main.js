import React from 'react';
import { Link } from 'react-router';
import Footer from './Footer';
import Header from './Header'


class Main extends React.Component{
  render(){
    return(
      <div className= "main-container">
      <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

module.exports = Main;
