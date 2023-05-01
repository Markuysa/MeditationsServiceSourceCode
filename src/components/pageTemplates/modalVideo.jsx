import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";
import "../../css/modalVideoStyles.css"
import WhiteButton from "../../UI/whiteButton/WhiteButton";
const ModalVideo = (props)=>{


    useEffect(() => {
        let popup = document.querySelector(".popup")

        let pButton = document.querySelector(".popupButton")
        
        let hideButton = document.querySelector(".popup__close")
        const showPopup = ()=>{
            popup.classList.add("active")
        }
        pButton.addEventListener('click',showPopup);
        const hidePopup = ()=>{
            popup.classList.remove("active")
        }
        hideButton.addEventListener('click',hidePopup)
    }, []);
    return (
       <div className="ModalVideo">
          <div className="buttonBlock">
            <button className="popupButton">Start</button>
          </div>
            <div className="popup">
                <div className="popup__body">
                    <div className="popup__content">
                        <a href="#" className="popup__close">X</a>
                        <div className="popup__title">
                            <iframe
                                className="modal__video-style"
                                loading="lazy"
                                
                                height="500px"  
                                
                                src={props.video}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              ></iframe>
                        </div>
                    </div>
                </div>
            </div>
       </div>
      );


}


export default ModalVideo;