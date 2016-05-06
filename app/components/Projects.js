import React from 'react';
import ProjectTools from "../info/ProjectTools"

let skill_data ={
  html: "HTML5",
  css: "CSS",
  js: "JavaScript",
  jquery: "JQuery",
  ruby: "Ruby on Rails",
  angular: "AngularJS",
  mean: "Mean Stack",
  react: "ReactJS",
  active: "Active Record",
  api: "RESTful APIs",
  mat: "Materialize",
  boot: "Bootstrap",
  sass: "Sass",
  ex: "Express",
  node: "NodeJS"
}

class Projects extends React.Component{
  render(){
    return(
      <div className="project-container">
        <nav className="portfolio">
        </nav>
        <ProjectTools html={skill_data.html} css={skill_data.css} js={skill_data.js} jq={skill_data.jquery} ruby={skill_data.ruby} ang={skill_data.angular} boot={skill_data.boot} api={skill_data.api} mat={skill_data.mat} active={skill_data.active} ex={skill_data.ex} node={skill_data.node} />
      </div>
    )
  }
}

module.exports = Projects;
