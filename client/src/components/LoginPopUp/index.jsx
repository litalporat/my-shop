import React from "react";
import Login from "../../Login";
import "./LoginPopUp.css";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import axios from "../../api/axios";

const LOGIN_URL = "/auth";

const LoginPopup = (props) => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

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
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response)); זה כל המידע, יכול להיות מאוד גדול אז בינתיים בהערה
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        // 400 זה קוד שנוהג לציין שהאינפורמציה הצפויה לא התקבלה
        setErrMsg("Missing Email or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  const togglePop = () => {
    document.addEventListener("click", (e) => {
      if (e.target.className == "popup-login-box") props.onClick();
    });
  };

  togglePop();

  return (
    <div className="popup-login-box">
      <div className="login-box">
        <div className="popup-details">
          <span className="close-icon" onClick={props.onClick}>
            x
          </span>

          <>
            {success ? (
              <section>
                <h1> You are logged in!</h1>
                <br />
                <p>
                  <a href="#">Go to Home</a>
                </p>
              </section>
            ) : (
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
                  <label htmlFor="email">Email:</label>
                  <input
                    type="text"
                    id="email"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user} /* אולי להעיף בשביל להשאיר שדה מלא */
                    required
                  />
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    ref={userRef}
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd} /* אולי להעיף בשביל להשאיר שדה מלא */
                    //required
                  />
                  <button>Sign In</button>
                </form>
                <p>
                  Don't have an account? <br />
                  <span className="line">
                    {/* פה יהיה ראוטר לינק */}
                    <a href="#">Sign Up</a>
                  </span>
                </p>
              </section>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
