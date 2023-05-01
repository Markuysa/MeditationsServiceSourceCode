import { Component, useEffect } from 'react';
import React from 'react';
import '../../css/header.css'
import BurgerButton from '../../UI/BurgerButton/burgerButton';
import Logotype from '../../UI/Logotype/Logotype';
const HeaderMain = () => {
    let accountMenu;
    let accountIcon;
    const username = localStorage.getItem('username')
    useEffect(() => {
        let burgerButton = document.querySelector('.mainHeaderBurger')    
        let menu = document.querySelector('.header__navigation__list_hidden')
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
        accountMenu = document.querySelector(".header_account__dropdownMenu")
        accountIcon = document.querySelector(".icon")
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
        <div className="headerWrapper">
            <header className="header">
                <div className="header_logo">
                    <p>WISH</p>
                </div>
                <div className="header_options_list">
                    <ul className="options_list">
                        <a href='/meditations'><li className="options_list_item">Meditate</li></a>
                        <a href='/errorPage'><li className="options_list_item">About us</li></a>
                        <a href='/errorPage'><li className="options_list_item">Blog</li></a>
                    </ul>
                </div>
                <div className="mainHeaderBurger">
                    <BurgerButton />
                </div>
                <div className="hiddenLogotype">
                    <p>WISH</p>
                </div>
                <div>
                <div className="header_account_drop">
                    <div className="header_account">
                        <span className="icon" onClick={openAccMenu}>Account</span>
                    <div className="header_account__dropdownMenu">
                        {username && <div><p>Signed in as <a href={'/profile/'+localStorage.getItem('id')} className='userName'>{username}</a></p></div>}
                        <ul>
                        {username && <a href={'/profile/'+localStorage.getItem('id')}><li>Your profile</li></a>}
                        {username && <a href="/errorPage"><li>Your meditations</li></a>}
                            <a href="/errorPage"><li>Upgrade Pro</li></a>
                            {username &&    <a href="/login" onClick={()=>{
                                localStorage.removeItem('jwt')
                                localStorage.removeItem('id')
                                localStorage.removeItem('username')
                            }}><li>Sign out</li></a>
                        }
                        { !username && <a href="/login"><li>Sign in</li></a>}
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </header>
            <ul className="header__navigation__list_hidden">
                <a href="/meditations"><li>Meditate</li></a>
                <a href=""><li>About us</li></a>
                <a href=""><li>Blog</li></a>
                <span className="close_button">X</span>
            </ul>
        </div>
    );

}
export default HeaderMain;