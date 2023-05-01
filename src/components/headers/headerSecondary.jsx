
import { Collapse } from "bootstrap";
import { event } from "jquery";
import React  from 'react';
import { useEffect } from "react";
import "../../css/headerSecondary.css"
import BurgerButton from "../../UI/BurgerButton/burgerButton";
import InputField from "../../UI/InputField/InputFiels";
import Logotype from "../../UI/Logotype/Logotype";
import SearchField from "../../UI/SearchField/searchField";
import MeditationsList from "../meditationComponents/meditationsList";


const HeaderSecondary = ()=>{
    let accountMenu;
    let accountIcon;
    const username = localStorage.getItem('username')
    useEffect(() => {
        let burgerButton = document.querySelector('.secondaryBurger')    
        let menu = document.querySelector('.header-secondary__navigation__list_hidden')
        const onBurgerClick = ()=>{
            menu.style.transform="translateY(0)"
        }
    
        let close_button = document.querySelector('.close_button')
        const onCloseClick = ()=>{
            menu.style.transform="translateY(-100%)"
        }
        burgerButton.addEventListener('click',onBurgerClick)
        close_button.addEventListener('click',onCloseClick)

        // if (burgerButton.style.visibility=="collapse")
        const style = window.getComputedStyle(burgerButton)
        const visibility = style.getPropertyValue('visibility');
        if (visibility=="collapse"){
            menu.style.transform="translateY(-100%)"
        }
        accountMenu = document.querySelector(".header-secondary_account__dropdownMenu")
        accountIcon = document.querySelector(".icon")
        //accountIcon.addEventListener('click',openAccMenu);
      });
      let flag = true;
      const openAccMenu = ()=>{
        if (flag){
            accountMenu.style.visibility = "visible"
            accountMenu.style.opacity = "1"
            flag = false;
        }
        else{
            accountMenu.style.visibility = "collapse";
            accountMenu.style.opacity = "0";
            flag=true;
            return;
        }
    }
    return (
        <div className="header-secondary__wrapper">
            <div className="header-secondary__content">
                <div className="header-secondary__main_nav">
                    <nav className="header-secondary__navigation">
                        <ul className="header-secondary__navigation__list">
                            <a href="/"><li>To main page</li></a>
                            <a href=""><li>About us</li></a>
                            <a href=""><li>Blog</li></a>
                        </ul>
                    </nav>
                    <div className="secondaryBurger">
                        <BurgerButton />
                    </div>
                    <div className="header-secondary__logotype">
                        <Logotype />
                    </div>
                    <div className="header-secondary__account">
                        <span className="icon" onClick={openAccMenu}>Account </span>
                        <div className="header-secondary_account__dropdownMenu">
                        {username && <div><p>Signed in as <a href="">{username}</a></p></div>}
                            <ul>
                                <a href="/errorPage"><li>Upgrade Pro</li></a>
                                <a href="/login"><li>Sign in</li></a>
                                <a href="/signUp"><li>Sign up</li></a>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <ul className="header-secondary__navigation__list_hidden">
                <a href="/"><li>To main page</li></a>
                <a href="/errorPage"><li>About us</li></a>
                <a href="/errorPage"><li>Blog</li></a>
                {/* <a href="/errorPage"><li>Your profile</li></a>
                <a href="/errorPage"><li>Your meditations</li></a>
                <a href="/errorPage"><li>Upgrade Pro</li></a>
                <a href="/errorPage"><li>Sign out</li></a> */}
                <span className="close_button">X</span>
            </ul>
        </div>
        

    );

}
export default HeaderSecondary;