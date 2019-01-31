import React, { Component } from 'react';
import logo from '../../img/logo.png';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <ul className="navbar-links navbar-links--left">
                                <li>
                                    <NavLink exact to="/">Home</NavLink>
                                </li>

                                <li>
                                    <NavLink exact to="/">About</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <img className="navbar-logo" src={logo} alt="Schoolab Logo" />
                        </div>
                        <div className="col">
                            <ul className="navbar-links navbar-links--right">
                                <li>
                                    <NavLink exact to="/">Log in</NavLink>
                                </li>

                                <li>
                                    <NavLink exact to="/">Sign up</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Navbar;

/* <div className="navbar container-fluid text-center">
        <img className="navbar-logo" src={ logo } alt="Schoolab logo"/>
            <Link to='/'>MarioPlan</Link>
      </div> */