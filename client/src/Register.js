// import React from 'react'
// import { useRef, useState, useEffect } from "react";
// import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3-23}$/; // User must start with lower or upper-case letter, then any letter or number
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/; // Password must contain (L to R): a lower-case letter,
// //                                                                          an uppr-case letter, a number, and a special character, 8-24 characters long


// const Register = () => {
//   const userRef = userRef();
//   const errRef = useRef();

//   const [user, setUser] = useState('');
//   const [validName, setValidName] = useState(false);
//   const [userFocus, setUserFocus] = useState(false);

//   const [pwd, setpwd] = useState('');
//   const [validPwd, setValidPwd] = useState(false);
//   const [pwdFocus, setpwdFocus] = useState(false);

//   const [match, setmatch] = useState('');
//   const [validMatch, setValidMatch] = useState(false);
//   const [matchFocus, setmatchFocus] = useState(false);

//   const [errMsg, setErrMsg] = useState('');
//   const [success, setSuccess] = useState(false);
  
//   useEffect(() => {
//     userRef.current.focus();
//   }, []);

//   useEffect(() => {
//     const result = USER_REGEX.test(user);
//     console.log(result);
//     console.log(user);
//     setValidName(result);
//   }, [user]);


//   useEffect(() => {
//     const result = PWD_REGEX.test(pwd);
//     console.log(result);
//     console.log(pwd);
//     setValidName(result);
//     const match = pwd === matchPwd;
//     setValidMatch(match);
//   }, [pwd, matchPwd]);

//   useEffect(() => {
//     setErrMsg('');
//   }, [user, pwd, matchPwd]);


//   return (
//     <section>
//       <p ref={errRef} className = {errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
//       <h1>Register</h1>
//       <form>
//         <label htmlFor="username">
//           Username
//         </label>
//       </form>
//     </section>
//   )
// }

// export default Register