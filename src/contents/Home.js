import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/default.png';
import Social from '../components/Social'

class Home extends Component {
    render () {
        return (
            <div className = "condiv home">
                <img src={profilepic} alt = "ProfilePic" className = "profilepic"></img>
                <ReactTypingEffect className = "typingeffect" 
                text={['I am Abhimanyu Thosar','I am a student', 'I am a musician', 'I am a developer']}
                speed = {60}
                eraseDelay = {1000}
                />
                <Social/>
            </div>
        )
    }
}

export default Home

