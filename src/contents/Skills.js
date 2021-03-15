import React, { Component } from 'react';
import htmlImg from './../img/html-pic.jpg';


class Skills extends Component {
    render () {
        return (
            <div className = "condiv">
                <div className= "blur-card blue-gradient">
                  <div className = "blur-card-title">
                    Languages
                  </div>

                  <ul className = "blur-card-text">
                    <li>HTML</li>
                    <li>JavaScript</li>
                    <li>CSS</li>
                  </ul>

                  <img className="blur-card-img" src={htmlImg} alt="htmlImg"/>
                </div>

                <div className= "blur-card green-gradient">
                  <div className = "blur-card-title">
                    Frameworks
                  </div>

                  <ul className = "blur-card-text">
                    <li>React.js</li>
                    <li>Vue.js</li>
                    <li>Angular.js</li>
                  </ul>

                  <img className="blur-card-img" src={htmlImg} alt="htmlImg"/>
                </div>
            </div>
        )
    }
}

export default Skills
