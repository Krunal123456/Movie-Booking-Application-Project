import React, { Component } from 'react';
import "./Header.css";
import MovieLogo from "../../assets/logo.svg";



    

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