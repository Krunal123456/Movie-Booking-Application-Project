import React, { Component } from "react";
import MovieLogo from "../../assets/logo.svg";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div class="header">
        <img src={MovieLogo} alt="logo" id="image" />
      </div>
    );
  }
}
export default Header;
