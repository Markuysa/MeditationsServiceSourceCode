import '../css/signUp.css'
import Button from '../UI/Blackbutton/BlackButton';
import InputField from '../UI/InputField/InputFiels';
import InputFieldForm from '../UI/InputFieldForm/InputFieldForm';
import Logotype from '../UI/Logotype/Logotype';
import RegisterButton from '../UI/RegisterButton/BlackButton';
import TransparentButton from '../UI/transparentButton/TransparentButton';
import React, { Component }  from 'react';
const SignUp = () =>{

    return(
        <div className="login-wrapper">
            <div className="login-logotype">
                <Logotype />
            </ div>
            <div className="login-background"></div>
            <div className="login-container">
                <h1>Welcome </h1>
                <form action="post" className="form">
                    <div className="form__inputFields">
                        <section>
                            <label htmlFor="email">Email</label> 
                            <InputFieldForm type="text" name='email' placeholder="Email"/>
                        </section>
                        <br />
                        <section>
                            <label htmlFor="password">Password</label> 
                            <InputFieldForm type="password" name='password' placeholder="Password"/>
                        </section>
                        <section>
                            <label htmlFor="name">Name</label> 
                            <InputFieldForm type="text" name='username' placeholder="Name"/>
                        </section>
                        <div className="form__additionalFeatures">

                    </div>
                    </div>
                    <div className="form__buttonsBlock">
                        <RegisterButton>Register</RegisterButton>
                        <p>or</p>
                        <TransparentButton>Sign up with Google</TransparentButton>
                    </div>
                </form>
                <span className='signUpSpan'>Already have an account? <a href='/login'>Sign in here</a></span>
            </div>
        </div>
        

    );

}

export default SignUp;
