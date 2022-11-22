import React from "react";
import classes from "./TransparentButton_styles.module.css"
const TransparentButton = ({children, ...props})=>{

    return (
        <button {...props} className={classes.button} type="submit"> 
            <span className = {classes.icon}>{children}</span>
        </button>
    );

};

export default TransparentButton;