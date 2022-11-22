import React from "react";
import classes from './MeditationsSelect.module.css'

const MeditationsSelect = ({options,defaultValue,value,onChange})=>{
    return(
        <select className={classes.meditations_select_class}
            value= {value}
            onChange= {event => onChange(event.target.value) }
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value} className={classes.optionSelect}>
                    {option.name}
                </option>
            )}
            
        </select>

    );
};


export default MeditationsSelect;