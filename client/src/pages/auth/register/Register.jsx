import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';
import wave from "../../../asset/img/wave.png";
import bg from "../../../asset/img/bg.svg";
import avatar from "../../../asset/img/avatar.svg";
import "./register.css";
import { LockOutlined } from "@material-ui/icons";
function Register() {
  return (
    <Fragment>
      <img className="wave" src={wave} alt="wave" />
      <div className="container">
        <div className="img">
          <img src={bg} alt="bg" />
        </div>
        <div className="login-content">
          <form>
            <img src={avatar} alt="avatar" />
            <h2 className="title">Signup</h2>
            <div className="input-div one">
              <div className="i">
                <PersonIcon />
              </div>
              <div className="div">
                <h5>Username</h5>
                <input type="text" className="input" />
              </div>
            </div>
            <div className="input-div one">
              <div className="i">
               <PersonIcon />
              </div>
              <div className="div">
                <h5>Email</h5>
                <input placeholder="Email" type="email" className="input" />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
               <LockOutlined />
              </div>
              <div className="div">
                <h5>Password</h5>
                <input
                  placeholder="password"
                  type="password"
                  className="input"
                />
              </div>
            </div>
            <Link to="#">Forgot Password?</Link>
            <input type="submit" className="btn" />
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Register;
