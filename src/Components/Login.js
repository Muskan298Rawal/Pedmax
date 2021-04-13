import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "../App.css";

function Login(props) {
  const [userName, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e) => {
    setUser(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.option(false);
  };

  return (
    <div className="modal_login ">
      <br />
      <img src="assets/logo.svg" alt="PEDMAX" className="mx-5" />
      <h2 className="modal_login_h2 mx-5">ACCESSS</h2>
      <br />
      <input
        className="mx-3"
        type="text"
        onChange={handleName}
        placeholder="UserName"
      />
      <br />
      <br />
      <input
        className="mx-3"
        type="text"
        onChange={handlePassword}
        placeholder="Password"
      />
      <br />
      <br />
      <Button className="btn_sign mb-3 mt-3 ml-2" onClick={handleSubmit}>
        LOGIN
      </Button>
      &nbsp; &nbsp;
      <Button className="btn_modal mb-3 mt-3" onClick={props.click}>
        Close
      </Button>
    </div>
  );
}

export default Login;
