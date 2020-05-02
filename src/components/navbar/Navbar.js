import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        {this.props.appName}
        <Link to='/'>
          <span>HOME</span>
        </Link>
        <Link to="/about">
           <span>ABOUT</span>
        </Link>

      </div>
    )
  }
}
