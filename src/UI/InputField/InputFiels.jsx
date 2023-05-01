import classes from './InputStyles.module.css'
import React, { Component }  from 'react';
const InputField= (props) => {
    
    return (
        // <input type = {props.type} class={classes.input} placeholder={props.placeholder}/>
        <div className={classes.inputField}>
            <input {...props} className={classes.input_field}></input>
            {/* <button className={classes.input_button} type="submit"></button> */}
        </div>
    );

}

export default InputField;