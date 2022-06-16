import React from 'react';
import { useRef, useState, useEffect, useContext} from 'react';
import AuthContext from "./context/AuthProvider";
import axios from 'axios';

const LOGIN_URL = 'http://localhost:5000/api/auth/login';

const Login = (props) => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();
    
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user,pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post(LOGIN_URL, {email: user, password: pwd},{
                headers: {'Content-Type': 'application/json'}
            }
            );
            console.log(response);
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({user, pwd, roles, accessToken});
            setUser('');
            setPwd('');
            setSuccess(true);
            window.localStorage.setItem("key", accessToken);
            props.setIsLogin(true);
        }catch (err){
            if (!err?.response){
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400){
                setErrMsg('Bad Request');
            } else if (err.response?.status === 401){
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1> You are logged in!</h1>
                    <br />
                    {/* <p>
                        <a href = "#">Go to Home</a>
                    </p> */}
                </section>
            ) : (

        <section>
            <p ref = {errRef} className = {errMsg ? "errmsg" : "offscreen"} aria-live = "assertive">{errMsg}</p>
            <h1 className='login-title'>Sign In</h1>
            <form className='login-form' onSubmit = {handleSubmit}>
                <label htmlFor = "email">Email:</label>
                <input
                    type = "text"
                    id = "email"
                    ref = {userRef}
                    autoComplete = "off"
                    onChange = {(e) => setUser(e.target.value)}
                    value = {user}  /* אולי להעיף בשביל להשאיר שדה מלא */
                    required
                />
                <br />
                <label htmlFor = "password">Password:</label>
                <input
                    type = "password"
                    id = "password"
                    ref = {userRef}
                    onChange = {(e) => setPwd(e.target.value)}
                    value = {pwd}  /* אולי להעיף בשביל להשאיר שדה מלא */
                    //required
                />
                                <br />

                <button>Sign In</button>
            </form>
            {/* <p>
                Don't have an account? <br />
                <span className = "line">
                    <a href = "#">Sign Up</a>
                </span>
            </p> */}
        </section>
            )}
        </>
  )
}

export default Login