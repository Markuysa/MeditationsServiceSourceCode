import classes from './InputFieldFormStyles.module.css'
import React, { Component }  from 'react';
const InputFieldForm= (props) => {
    
    return (
        // <input type = {props.type} class={classes.input} placeholder={props.placeholder}/>
        <div className={classes.inputFieldForm}>
            <input {...props} className={classes.input_field_form}></input>
        </div>
    );

}

export default InputFieldForm;