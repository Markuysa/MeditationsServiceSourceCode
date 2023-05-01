import React, { Component }  from 'react';
import classes from "./burgerButtonStyles.module.css"

const BurgerButton = ()=>{
    return (
        <div class={classes.burger__icon}>
            <div class={classes.burger__middle_line}>

            </div>
        </div>
    );
}

export default BurgerButton;