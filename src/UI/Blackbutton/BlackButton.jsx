import React from "react";
import classes from "./BlackButton_styles.module.css"
import { useState } from "react";
import { redirect, useNavigate } from 'react-router-dom';

const BlackButton = ({ children, ...props  }) => {
    const [isLoading, setIsLoading] = useState(false);
    const handleClick = (e) => {
      const usernameField = document.querySelector('input[name=username]');
      const passwordField = document.querySelector('input[name=password]');
      e.preventDefault();
      const username =  usernameField.value;
      const password = passwordField.value;
      const userData = { 
        username: username, 
        password: password, 
      };
      const userDataJson = JSON.stringify(userData);
      setIsLoading(true);
      fetch(`http://localhost:8080/api/auth/signin`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },  
        body:userDataJson
      })
        .then((response) => response.json())
        .then(data=>{
          setIsLoading(false)
          localStorage.setItem("jwt",data.token)
          localStorage.setItem("username",data.username)
          localStorage.setItem("id",data.id)
          window.location.replace("http://localhost:3000/") 
        })
    }
    return (
      <button
        className={classes.button}
        type="submit"
        {...props}
        disabled={isLoading}
        onClick={handleClick}
      >
        {isLoading ? "Идет загрузка..." : children}
      </button>
    );
}

export default BlackButton;