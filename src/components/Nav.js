import React, {Component} from "react";
import {Link} from "react-router-dom";
import { ReactComponent as Logo } from "../img/logo.svg";

class Nav extends Component {
    render() {
        return (
            <nav className="nav-extended">
                <div className="container">
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo"><Logo/></Link>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                            className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/signIn">Sign In</Link></li>
                            <li><Link to="/signUp">Sign Up</Link></li>
                        </ul>
                    </div>
                    <div className="nav-content">
                        <ul className="tabs tabs-transparent">
                            <li className="tab"><Link to="/buy">Buy Tickets</Link></li>
                            <li className="tab"><Link to="/discover">Discover</Link></li>
                            <li className="tab"><Link to="/movie">Movies</Link></li>
                            <li className="tab"><Link to="/tv">Tv Shows</Link></li>
                            <li className="tab"><Link to="/person">People</Link></li>
                        </ul>
                    </div>

                    <ul className="sidenav" id="mobile-demo">
                        <li><Link to="/signIn">Sign In</Link></li>
                        <li><Link to="/signUp">Sign Up</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;