import React from 'react';
import axios from 'axios';
import classes from './WhiteButtonStyles.module.css';
import { useParams } from "react-router-dom";
const WhiteButton = ({ children, ...props }) => {
  let { id } = useParams();

  const handleClick = async () => {
    try {
      const button = document.getElementById("fav_button")
      const token = localStorage.getItem('jwt');
      const userId = localStorage.getItem('id');
      await axios.post(`http://localhost:8080/user/${userId}/favorites/${id}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("added!")
      button.disabled=true
      button.style.background="grey"
    } catch (error) {
      console.error(error);
      //window.location.replace("http://localhost:3000/login") 
    }
  };

  return (
    <button {...props} id="fav_button" className={classes.whiteButton} type="submit" onClick={handleClick}>
      {children}
    </button>
  );
};

export default WhiteButton;
