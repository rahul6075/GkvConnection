import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import wave from "../../../asset/img/wave.png";
import bg from "../../../asset/img/bg.svg";
import avatar from "../../../asset/img/avatar.svg";
import "../register/register.css";
import Person from "@material-ui/icons/Person";
import { LockOpenOutlined } from "@material-ui/icons";
function Login() {
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
            <h2 className="title">SignIn</h2>

            <div className="input-div one">
              <div className="i">
                <Person />
              </div>
              <div className="div">
                <h5>Email</h5>
                <input
                  placeholder="Email"
                  type="email"
                  className="input"
                />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <LockOpenOutlined />
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
            <input
              type="submit"
              className="btn"
            />
          </form>
        </div>
      </div>
    </Fragment>
    )
}

export default Login
