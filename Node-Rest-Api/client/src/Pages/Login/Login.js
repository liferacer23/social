import React, { useContext, useRef } from "react";
import styles from "./Login.module.css";
import { loginCall } from "../../apiCall";
import { AuthContext } from "../../Context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";
import {Link} from 'react-router-dom';
export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const formHandler = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user);
  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.loginTop}>
          <h3 className={styles.loginLogo}>Holla!!</h3>
          <span className={styles.loginDesc}>
            Connect with friends on Holla!!
          </span>
        </div>
        <div className={styles.loginBottom}>
          <form onSubmit={formHandler} className={styles.loginBox}>
            <input
              className={styles.loginInput}
              placeholder="Email"
              type="email"
              required
              ref={email}
            />
            <input
              className={styles.loginInput}
              placeholder="Password"
              required
              minLength="6"
              type="password"
              ref={password}
            />
            
            <button type="submit" className={styles.loginButton} disabled={isFetching}>
              {isFetching ? <CircularProgress  color="inherit" size="20px"/> : "Login"}
            </button>
           
            <span className={styles.loginForgot}> Forgot Password?</span>
            <Link to="/register">
            <button className={styles.loginRegisterButton}>{isFetching ? <CircularProgress  color="inherit" size="20px"/> : "Register"}</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
