import React from "react";
import "../App.css";
import {
  faDollarSign,
  faHome,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-ui/core";
import { useState } from "react";
import Modal from "react-modal";
import Login from "./Login";
import Register from "./Register";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const custom = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const [showlogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  const handleShowRegister = () => setShowRegister(true);
  const handleCloseRegister = () => setShowRegister(false);

  return (
    <>
      <div>
        <Modal
          overlayClassName="myoverlay"
          style={custom}
          isOpen={showlogin}
          onRequestClose={handleCloseLogin}
        >
          <Login click={handleCloseLogin} option={setShowLogin} />
        </Modal>
      </div>
      <div>
        <Modal
          style={custom}
          isOpen={showRegister}
          onRequestClose={handleCloseRegister}
        >
          <Register click={handleCloseRegister} option={setShowRegister} />
        </Modal>
      </div>
      <nav className="navbar navbar-expand-lg text-light">
        <Link className="navbar-brand" to="/">
          <img
            src="https://www.pedmax.com/images/logo.svg"
            alt="PEDMAX"
            className="mx-5"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <NavLink
                className="nav-link text-decoration-none text-light"
                to="/home"
                activeClassName="active-topnav"
              >
                <Button
                  startIcon={
                    <FontAwesomeIcon
                      className="text-lightwhite"
                      icon={faHome}
                    />
                  }
                  className="text-lightwhite text-capitalize"
                >
                  Home
                </Button>
              </NavLink>
            </li>
            <li className="nav-item text-capitalize">
              <NavLink
                className="nav-link text-decoration-none"
                to="/sports"
                activeClassName="active-topnav"
              >
                <Button
                  startIcon={
                    <FontAwesomeIcon
                      className="text-lightwhite"
                      icon={faTrophy}
                    />
                  }
                  className="text-lightwhite text-capitalize"
                >
                  Sports
                </Button>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-decoration-none"
                to="/livebetting"
                activeClassName="active-topnav"
              >
                <Button
                  startIcon={
                    <FontAwesomeIcon
                      className="color-white"
                      icon={faDollarSign}
                    />
                  }
                  className="text-lightwhite text-capitalize"
                >
                  Live
                </Button>
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <Button className="btn_login" onClick={handleShowLogin}>
                  LOGIN
                </Button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <Button className="btn_sign" onClick={handleShowRegister}>
                  REGISTER
                </Button>
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="btn btn-secondary mt-2 dropdown-toggle"
                data-toggle="dropdown"
              >
                Country
              </button>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/">
                  India
                </Link>
                <Link className="dropdown-item" to="/">
                  England
                </Link>
                <Link className="dropdown-item" to="/">
                  Australia
                </Link>
                <Link className="dropdown-item" to="/">
                  US
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
