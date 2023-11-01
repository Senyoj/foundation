import "./Header.css";
import Search from "../searchbar/Search";
import { logo } from "../../../assets/images/image";
import React from "react";

const Header = () => {
  return (
    <div className="body">
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <a href="#"> Home</a>
            </li>
            <li>
              <a href="#"> About Us</a>
            </li>
            <li>
              <a href="#"> Impact Stories</a>
            </li>
            <li>
              <a href="#"> Programs</a>
            </li>
            <li>
              <a href="#"> News & Updates</a>
            </li>
            <li>
              <a href="#"> Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className ="search">
        <Search />
      </div>
    </div>
  );
};

export default Header;
