import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaStethoscope } from "react-icons/fa";
import { SlMustache } from "react-icons/sl";
import { getRole, removeToken, removeRole, removeEmail } from "./LocalStorage";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Experiencing high traffic, Please wait a moment.", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  const role = getRole();

  const handleLogout = () => {
    removeEmail();
    removeToken();
    removeRole();
    window.location.href = "/";
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          Care Nexus
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
            </Link>
          </li>
          <li>
            <a href="#services" className="navbar-links">
              Services
            </a>
          </li>

          <li>
            <a href="#doctors" className="navbar-links">
              Doctors
            </a>
          </li>

          {role === null ? (
            <li>
              <a href="/loginoptions" className="navbar-links">
                Login
              </a>
            </li>
          ) : (
            <button className="navbar-links" onClick={handleLogout}>
              Logout
            </button>
          )}

          {/* <li>
            <a href="#contact" className="navbar-links">
              Contact
            </a>
          </li> */}
        </ul>

        <button
          className="navbar-btn"
          type="button"
          disabled={isButtonDisabled}
          //onClick={handleChatBtnClick}
        >
          <FontAwesomeIcon icon={faCommentDots} /> Reach out us
        </button>
      </div>
  );
}

export default Navbar;
