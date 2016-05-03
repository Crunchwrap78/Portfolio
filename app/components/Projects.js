import React from 'react';
let skill_data ={
  html: "HTML5",
  css: "CSS",
  javascript: "JavaScript",
  jquery: "JQuery",
  ruby: "Ruby on Rails",
  angular: "AngularJS",
  mean: "Mean Stack",
  react: "ReactJS",
  active: "Active Record"
}

class Projects extends React.Component{
  render(){
    return(
      <div className="project-container">
        <nav className="portfolio">
        </nav>
        <div className="portfolio-container">
          <div className="Projects1 box">
            <div className="mask">
              <h1> Match Game</h1>
              <p><a href="#" className="info">The magic</a></p>
              <p><a href="#" className="info">see it now!</a></p>
            </div>
          </div>

          <div className="Projects2 box">
            <div className="mask">
              <h1> I workout </h1>
              <p><a href="#" className="info">The magic</a></p>
              <p><a href="#" className="info">see it now!</a></p>
            </div>
          </div>

          <div className="Projects3 box">
            <div className="mask">
              <h1> Roe v Wade </h1>
              <p><a href="#" className="info">The magic</a></p>
              <p><a href="#" className="info">see it now!</a></p>
            </div>
          </div>

          <div className="Projects4 box">
            <div className="mask">
              <h1> Cryptly </h1>
              <p><a href="#" className="info">The magic</a></p>
              <p><a href="#" className="info">see it now!</a></p>
            </div>
          </div>

          <div className="Projects5 box">
            <div className="mask">
              <h1> Tesla Travels</h1>
              <p><a href="#" className="info">The magic</a></p>
              <p><a href="#" className="info">see it now!</a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Projects;
