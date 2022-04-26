import { useRef } from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";
import { useNavigate } from 'react-router-dom';
export default function Register() {
  const password = useRef();
  const passwordConfirm = useRef();
  const email = useRef();
  const username = useRef();
  const navigate = useNavigate();
  const handleRegister = async(e) => {
    e.preventDefault();
    if(password.current.value !== passwordConfirm.current.value)
    {
      passwordConfirm.current.setCustomValidity("Passwords don't matching mate!!");
    }
    else{
      const user = { 
        username:username.current.value,
        password:password.current.value,
        email:email.current.value,
      };
      try{

       await axiosInstance.post('/auth/register',user);
        navigate('/')
      }catch(err){
        console.log(err);

      }
    }
  };
  return (
    <div className={styles.register}>
      <div className={styles.registerWrapper}>
        <div className={styles.registerTop}>
          <h3 className={styles.registerLogo}>Holla!!</h3>
          <span className={styles.registerDesc}>
            Connect with friends on Holla!!
          </span>
        </div>
        <div className={styles.registerBottom}>
          <form onSubmit={(e)=>{handleRegister(e)}} className={styles.registerBox}>
            <input
              className={styles.registerInput}
              placeholder="User Name"
              type="text"
              ref={username}
              required
            />
            <input
              className={styles.registerInput}
              placeholder="Email"
              type="email"
              ref={email}
              required
            />
            <input
              className={styles.registerInput}
              placeholder="Password"
              type="password"
              ref={password}
              required
              minLength={6}
            />
            <input
              className={styles.registerInput}
              placeholder="Confirm Email"
              type="password"
              ref={passwordConfirm}
              required
              minLength={6}
            />
            <button type="submit" className={styles.registerButton}>Sign Up</button>

            <span className={styles.registerForgot}> Or</span>
            <Link to="/login">
              <button className={styles.registerRegisterButton}>Login</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
