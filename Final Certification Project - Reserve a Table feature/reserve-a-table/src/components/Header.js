import React from "react"
import Logo from "../assets/images/logo.jpg"
import Nav from "./Nav"

function Header(props) {

    return (
        <React.Fragment>
            <header className="header" >
                <img src={Logo} alt ="Logo" className="header-logo" />
                <Nav />
            </header>
        </React.Fragment>
    );
}

export default Header;