import React from 'react';

class ProjectTools extends React.Component{
  render(){
    return(
      <div className="portfolio-container">
        <div className="Projects1 box">
          <div className="mask">
            <h1> Match Game</h1>
              <div className="skills">
                  <div className="skill">{this.props.html}</div> <div className="skill">{this.props.css}</div> <div className="skill">{this.props.js}</div> <div className="skill">{this.props.jq}</div>
              </div>
            <p><a href="https://github.com/Crunchwrap78/Memory-Match" className="info">The Code</a></p>
            <p><a href="http://crunchwrap78.github.io/Memory-Match/" className="info">see it live!</a></p>
          </div>
        </div>

        <div className="Projects2 box">
          <div className="mask">
            <h1> I workout </h1>
              <div className="skills">
                <div className="skill">{this.props.html}</div> <div className="skill">{this.props.css}</div> <div className="skill">{this.props.boot}</div> <div className="skill">{this.props.ruby}</div> <div className="skill">{this.props.jq}</div> <div className="skill">{this.props.api}</div>
             </div>
            <p><a href="https://github.com/Crunchwrap78/Beach-Body-Season" className="info">The Code</a></p>
            <p><a href="https://beachbodyplanning.herokuapp.com" className="info">see it live!</a></p>
          </div>
        </div>

        <div className="Projects3 box">
          <div className="mask">
            <h1> Roe v Wade </h1>
              <div className="skills">
                <div className="skill">{this.props.html}</div> <div className="skill">{this.props.css}</div> <div className="skill">{this.props.boot}</div> <div className="skill">{this.props.ruby}</div> <div className="skill">{this.props.ang}</div> <div className="skill">{this.props.js}</div> <div className="skill">{this.props.api}</div> <div className="skill">{this.props.jq}</div>
              </div>
            <p><a href="https://github.com/clarissastark/project-3" className="info">The Code</a></p>
            <p><a href="https://roevwade.herokuapp.com/#/" className="info">see it live!</a></p>
          </div>
        </div>

        <div className="Projects4 box">
          <div className="mask">
            <h1> Cryptly </h1>
              <div className="skills">
                <div className="skill">{this.props.html}</div> <div className="skill">{this.props.css}</div> <div className="skill">{this.props.node}</div> <div className="skill">{this.props.ex}</div> <div className="skill">{this.props.js}</div>
              </div>
            <p><a href="https://github.com/holytoastr/url_shortener" className="info">The Code</a></p>
            <p><a href="http://cryptly.herokuapp.com/" className="info">see it live!</a></p>
          </div>
        </div>

        <div className="Projects5 box">
          <div className="mask">
            <h1> Tesla Travels</h1>
              <div className="skills">
                <div className="skill">{this.props.html}</div> <div className="skill">{this.props.css}</div> <div className="skill">{this.props.mat}</div> <div className="skill">{this.props.ruby}</div> <div className="skill">{this.props.jq}</div> <div className="skill">{this.props.api}</div> <div className="skill">{this.props.ang}</div>
              </div>
            <p><a href="https://github.com/Crunchwrap78/TeslaTravels" className="info">The Code</a></p>
            <p><a href="#" className="info">see it live!</a></p>
          </div>
        </div>

        <div className="Projects6 box">
          <div className="mask">
            <h1> Dance Away </h1>
              <div className="skills">
                <div className="skill">{this.props.html}</div> <div className="skill">{this.props.css}</div> <div className="skill">{this.props.mat}</div> <div className="skill">{this.props.ruby}</div> <div className="skill">{this.props.jq}</div> <div className="skill">{this.props.api}</div>
              </div>
            <p><a href="https://github.com/Crunchwrap78/CreativeStyles" className="info">The Code</a></p>
            <p><a href="#" className="info">see it live!</a></p>
          </div>
        </div>

        <div className="parallax-footer">
        </div>
      </div>
    )
  }
}

export default ProjectTools;
