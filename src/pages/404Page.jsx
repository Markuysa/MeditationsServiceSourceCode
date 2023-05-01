import "../css/404PageStyles.css"
import HeaderSecondary from "../components/headers/headerSecondary";
import Button from "../UI/Blackbutton/BlackButton";
import React, { Component }  from 'react';
const ErrorPage = ()=>{
    let adaptiveValue = 800
    return(
        <div className="ErrorPageWrapper">
            <div className="center">
            <div className="error">
                <div className="number">4</div>
                <div className="illustration">
                <div className="circle"></div>
                <div className="clip">
                    <div className="paper">
                    <div className="face">
                        <div className="eyes">
                        <div className="eye eye-left"></div>
                        <div className="eye eye-right"></div>
                        </div>
                        <div className="rosyCheeks rosyCheeks-left"></div>
                        <div className="rosyCheeks rosyCheeks-right"></div>
                        <div className="mouth"></div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="number">4</div>
            </div>

            <div className="text">Oops. The page you're looking for doesn't exist.</div>
            <div className="button_block">
                <a className = "errorPageHome" href="/">Home page</a>
            </div>
            </div>
        </div>
    );

}

export default ErrorPage;