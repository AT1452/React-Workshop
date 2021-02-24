import React, { Component } from 'react';
import NavItem from './NavItem';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive':''
        }
    }

    activeitem = (x) => {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }

        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    }

    render() {
        return (
            <nav>
                <ul>
                    <NavItem name = "Home" toLink = "/" activec = {this.activeitem}></NavItem>
                    <NavItem name = "About" toLink = "/about" activec = {this.activeitem} ></NavItem>
                    <NavItem name = "Education" toLink = "/education" activec = {this.activeitem}></NavItem>
                    <NavItem name = "Skills" toLink = "/skills" activec = {this.activeitem}></NavItem>
                    <NavItem name = "Contact" toLink = "/contact" activec = {this.activeitem}></NavItem>
                </ul>
            </nav>
        )
    }
}

export default Navbar