import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { UserLoginContext } from '../../App';
import fb from "../../resources/Icon/fb.png";
import google from "../../resources/Icon/google.png"
import './Loginform.css';
import {  createUserWithEmailAndPassword, handleFacebookSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';
import { useHistory, useLocation } from 'react-router-dom';

const Loginform = () => {
    const [userSignUp, setUserSignUp] = useContext(UserLoginContext);
    
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    initializeLoginFramework();

    const [userRegister, setUserRegister] = useState(false);
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => {
        if(data.firstName && data.lastName && data.email && data.password && data.confirmPassword){
            const {firstName, lastName, email,password, confirmPassword} = data;
            if(password === confirmPassword){
                const name = firstName.trim() + ' ' + lastName.trim();
                createUserWithEmailAndPassword(name.trim(),email.trim(),password.trim());
            }
        }
        if(data.email && data.password){
            const {email, password} = data;
            signInWithEmailAndPassword(email.trim(),password.trim())
            .then(res => {
                setUserSignUp(res);
                history.replace(from);
            })
        }
    };

    
    const googleSignIn = () => {
        handleGoogleSignIn()
        .then(res => {
            setUserSignUp(res);
            history.replace(from);
        })
    }

    const facebookSignIn = () => {
        handleFacebookSignIn()
        .then(res => {
            setUserSignUp(res);
            history.replace(from);
        })
    }
    return (
        <div className="row login-area">
            <div className="col-md-6 offset-md-3">
                <div className="login-form">
                    {
                            (!userRegister && <h2>Login</h2>) || (userRegister && <h2>Create an account</h2>)
                    }
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {
                            userRegister && <span><input placeholder="First Name" name="firstName" type="text" ref={register({ required: true })} />
                            {errors.firstName && <span className="error">First name is required</span>}</span>
                        }
                        {
                            userRegister && <span><input placeholder="Last Name" name="lastName" type="text" ref={register({ required: true })} />
                            {errors.lastName && <span className="error">Last name is required</span>}</span>
                        }
                        <input placeholder="Username or Email" name="email" type="text" ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })} />
                        {errors.email && <span className="error">Email or Username is required</span>}
                        <input placeholder="Password" name="password" type="password" ref={register({ required: true })}/>
                        
                        {
                        (errors.password && <span className="error">Password is required</span>) || (!userSignUp.isLogin && userSignUp.email && <span className="error">{userSignUp.error}</span>)
                        }
                        
                        {
                            userRegister && <span><input placeholder="Confirm Password" name="confirmPassword" type="password" ref={register({ required: true })} />
                            {errors.confirmPassword && <span className="error">Password doesn't match</span>}</span>
                        }
                        {
                            !userRegister &&  <div style={{display:'flex', justifyContent: 'space-between'}}>
                                <span><input type="checkbox" name="remember" value/>Remember Me</span>
                                <span style={{color: '#FAB748', textDecoration: 'underline',cursor: 'pointer'}}>Forgot Password</span>
                            </div>
                        }
                        <input  type="submit" value={(!userRegister && "Login") || (userRegister && "Create an account")}/>
                    </form>

                    {
                        (!userRegister &&  <p style={{textAlign: 'center'}}>Don't have an account?<span onClick={() => setUserRegister(!userRegister)} style={{color: '#FAB748', textDecoration: 'underline', cursor: 'pointer'}}>Create an account</span></p>) || (userRegister && <p style={{textAlign: 'center'}}>Already have an account?<span onClick={() => setUserRegister(!userRegister)} style={{color: '#FAB748', textDecoration: 'underline', cursor: 'pointer'}}>Login</span></p>)
                    }
                </div>
                <div className="loginWithSocial">
                    <p><span>Or</span></p>
                    <button onClick={facebookSignIn} className="socialButton">
                        <img src={fb}/><span>Continue with Facebook</span></button>
                    <button onClick={googleSignIn} className="socialButton">
                        <img src={google}/><span>Continue with Google</span></button>
                </div>
            </div>
        </div>
    );
};

export default Loginform;