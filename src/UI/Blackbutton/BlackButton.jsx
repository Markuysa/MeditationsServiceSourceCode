import React from "react";
import classes from "./BlackButton_styles.module.css"
const Button = ({children, ...props})=>{

    return (
        <button {...props} className={classes.button} type="submit"> 
            {children}
        </button>
    );

};

export default Button;