import classes from "./searchFieldStyles.module.css"

const SearchField = ()=>{
    return (
        <div className={classes.search_input__wrapper}>
            <input className={classes.search_input__field} type="text"  placeholder="Search"/><span className={classes.searchFieldIcon} ></span>
        </div>

    );
}

export default SearchField;