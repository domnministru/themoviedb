import React, {Component} from "react";
import Nav from "../components/Nav";
import SearchField from "../components/SearchField";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Nav/>
                <SearchField/>
            </div>
        )
    }
}

export default Header;