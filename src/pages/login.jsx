import '../css/login_page.css'
import BlackButton from '../UI/Blackbutton/BlackButton';
import InputField from '../UI/InputField/InputFiels';
import InputFieldForm from '../UI/InputFieldForm/InputFieldForm';
import Logotype from '../UI/Logotype/Logotype';
import TransparentButton from '../UI/transparentButton/TransparentButton';
import React, { Component }  from 'react';
const Login = () =>{

    return(
        <div className="login-wrapper">
            <div className="login-logotype">
                <Logotype />
            </ div>
            <div className="login-background"></div>
            <div className="login-container">
                <h1>Welcome Back</h1>
                <form action="post" className="form">
                    <div className="form__inputFields">
                        <section>
                            <label htmlFor="text">Username</label> 
                            <InputFieldForm type="text" name='username' placeholder="Username"/>
                        </section>
                        <br />
                        <section>
                            <label htmlFor="password">Password</label> 
                            <InputFieldForm type="password" name='password' placeholder="Password"/>
                        </section>
                    </div>
                    <div className="form__additionalFeatures">
                        
                        <a href="#"><span>Forgot password</span></a>
                    </div>
                    <div className="form__buttonsBlock">
                        <BlackButton>Sign in</BlackButton>
                        <p>or</p>
                        <TransparentButton>Sign in with Google</TransparentButton>
                    </div>
                </form>
                <span className='signUpSpan'>Don't fave an account? <a href='/signUp'>Sign up here</a></span>
            </div>

        </div>
        

    );

}

export default Login;
