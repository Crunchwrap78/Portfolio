import React from 'react';

class ProjectOne extends React.Component{
  render(){
    return(
      <div className="skills">
          <div>{this.props.html}</div> <div>{this.props.css}</div><div>{this.props.js}</div><div>{this.props.jq}</div>
      </div>

    )
  }
}

class ProjectTwo extends React.Component{
  render(){
    return(
      <div className="skills">
        <div className="skill">{this.props.html}</div> <div className="skill">{this.props.css}</div> <div className="skill">{this.props.boot}</div> <div className="skill">{this.props.ruby}</div> <div className="skill">{this.props.jq}</div> <div className="skill">{this.props.api}</div>
     </div>
    )
  }
}

class ProjectThree extends React.Component{
  render(){
    return(
      <div className="skills">
        <div className="skill">{this.props.html}</div> <div className="skill">{this.props.css}</div> <div className="skill">{this.props.boot}</div> <div className="skill">{this.props.ruby}</div> <div className="skill">{this.props.ang}</div> <div className="skill">{this.props.js}</div> <div className="skill">{this.props.api}</div> <div className="skill">{this.props.jq}</div>
      </div>
    )
  }
}

class ProjectFour extends React.Component{
  render(){
    return(
      <div className="skills">
        <div className="skill"></div> <div className="skill"></div> <div className="skill"></div>
      </div>
    )
  }
}

class ProjectFive extends React.Component{
  render(){
    return(
      <div className="skills">
        <div className="skill"></div> <div className="skill"></div> <div className="skill"></div>
      </div>
    )
  }
}

module.exports = ProjectTools;
