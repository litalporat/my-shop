import React from "react";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import auth from "../auth/auth";
import { useNavigate } from "react-router-dom";
import { Box, Button, Divider, IconButton, TextField } from "@mui/material";

const LOGIN_URL = "http://localhost:5000/api/auth/login";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        { email: user, password: pwd },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response);
      const accessToken = response?.data?.accessToken;
      window.localStorage.setItem("key", accessToken);
      auth.login(() => {
        navigate("/");
      });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Wrong username or password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1 className="login-title">Sign In</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="text"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />
        <br />
        <br />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          ref={userRef}
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          //required
        />
        <br />
        <button>Sign In</button>
      </form>
    </section>
  );
};

export default Login;
