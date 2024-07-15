import React from "react";
import "./Header.css";
import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../assets/images/Icon.png";
import logoImages from "../assets/images/logo.png";
import group_img from "../assets/images/group.png";

const Header = () => {
  return (
    <header >
      <nav>
        <div class="row">
          <div class="column">
            <img src={logoImages} alt="logo" />
          </div>
          <ul>
            <li>
              <img src={group_img} alt="group" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
