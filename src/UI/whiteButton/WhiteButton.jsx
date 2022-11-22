

import classes from "./WhiteButtonStyles.module.css"
const WhiteButton = ({children, ...props})=>{

    return (
        <button {...props} className={classes.whiteButton} type="submit"> 
                {children}
        </button>
    );

};

export default WhiteButton;