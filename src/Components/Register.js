import { Button } from "@material-ui/core";
import React from "react";
import "../App.css";

function Register(props) {
  return (
    <div className="modal_login">
      <br />
      <img src="assets/logo.svg" alt="PEDMAX" className="mx-5" />
      <h4 className="h2_color mx-5">Sign in! It is Fast and Easy</h4>
      <br />
      <input className="mx-3 mt-2" type="text" placeholder="UserName" />
      <br />
      <input className="mx-3 mt-2" type="text" placeholder="Mobile" />
      <br />
      <input
        className="mx-3 mt-2"
        type="text"
        placeholder="Choose a Password"
      />
      <br />
      <input className="mx-3 mt-2" type="text" placeholder="Confirm Password" />
      <br />
      <input className="mx-3 mt-2" type="text" placeholder="KRW" />
      <br />
      <select className=" select mt-2 mx-3">
        <option value="boi">BOI</option>
        <option value="sbi">SBI</option>
        <option value="axis">AXIS</option>
        <option value="hdfc">HDFC</option>
      </select>
      <br />
      <input className="mx-3 mt-2" type="text" placeholder="Account Number" />
      <br />
      <input className="mx-3 mt-2" type="text" placeholder="Bank Acount Name" />
      <br />
      <input
        className="mx-3 mt-2"
        type="text"
        placeholder="Agent Code Number"
      />
      <br />
      <Button className="btn_sign mb-3 mt-3 ml-2">SIGN UP</Button>
      &nbsp; &nbsp;
      <Button className="btn_modal mb-3 mt-3" onClick={props.click}>
        Close
      </Button>
    </div>
  );
}

export default Register;
