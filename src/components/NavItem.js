import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavItem extends Component {
    render() {
        return (
            <li id={this.props.name}>
                <Link to = {this.props.toLink} onClick={this.props.activec.bind(this, this.props.name)}>{this.props.name}</Link>
            </li>
        );
    }
}

export default NavItem;