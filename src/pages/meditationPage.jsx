import { useEffect } from "react";
import HeaderSecondary from "../components/headers/headerSecondary";
import MeditationPageSlider from "../components/meditationComponents/meditationPageSlider";
import Footer from "../components/pageTemplates/footer";
import ModalVideo from "../components/pageTemplates/modalVideo";

import "../css/meditationPageStyles.css"
import Button from "../UI/Blackbutton/BlackButton";
import WhiteButton from "../UI/whiteButton/WhiteButton";
    const MeditationPage = ()=>{
        let modalReadMore
        useEffect(()=>{
            modalReadMore = document.querySelector(".meditation_additionalInfo_modalWindow")
        })  
        const readMore = ()=>{
            modalReadMore.style.visibility ="visible";
            modalReadMore.style.opacity ="1";

        }
        const hideReadMore = ()=>{

            modalReadMore.style.visibility ="collapse";
            modalReadMore.style.opacity ="0";

        }
        return(
            // <MeditationPageSlider />
            <div className="meditationPage-wrapper">
                <HeaderSecondary />
                <div className="meditationPage-wrapper__content">
                    <div className="content__meditation_block">
                        <div className="meditation_block__imageSwiper">
                            
                            <img src="https://all-mongolia.ru/wp-content/uploads/a/a/7/aa7b09b14283d07d71816651385652cb.jpeg" alt="" />

                        </div>
                        <div className="meditation_block__textContent">
                            
                            <div className="textContent__title">
                                <h1>MEDITATIONS AFTER STRESS</h1>
                                <div className="textContent__categories">
                                    <h2>Category: to relax </h2>
                                </div>
                            </div>  
                            <div className="textContent__description">
                                <p>Your body begins to relax gradually. You feel the tension in your muscles disappear. With each spoken word, every muscle of the body is filled with a feeling of peace and pleasant lethargy. Your breathing is even, calm. Air freely fills the lungs and easily leaves them. The heart beats clearly, rhythmically. Turn your inner gaze to the fingers of your right hand. The coccyx of the fingers of the right hand seems to touch the surface of warm water. You can feel the pulsation in your fingertips. There is a feeling that the hand is gradually immersed in warm water. This magic water washes your right hand, relaxes it and rises up your arm... Up to the elbow... Even higher... Now your whole hand is immersed in a pleasant warmth, relaxes... Fresh, renewed blood runs through the veins
                                </p>
                            </div>
                            <div className="textContent__buttons">
                                {/* <WhiteButton>Start</WhiteButton> */}
                                <ModalVideo />
                                <WhiteButton>Add to favorite</WhiteButton>
                            </div>
                        </div>
                    </div>
                    <div className="meditation_additionalInfo">
                        <div className="meditation_additionalInfo__text">
                            <p className="additionalInfo_content">
                            This meditation is perfect for a morning routine to help prepare your mind for the day ahead or at the end of a hectic day to help ease stress and anxiety. At the start, you’ll get right into body awareness and deep belly breathing. Then, you'll focus on calming racing thoughts. She often pauses to let you just focus on breathing (while listening to waves), which can be difficult for someone with anxiety.
                            </p>
                            {/* <p className="additionalInfo_readMore"></p> */}
                        </div>
                        <div className="meditation_additionalnfo__iconsBlock">
                            <div className="inconsBlock__icon">
                                <img src="https://img.icons8.com/external-outline-juicy-fish/512/external-stress-crisis-management-outline-outline-juicy-fish.png" alt="" />
                                <p>Stress</p>
                            </div>
                            <div className="inconsBlock__icon">
                                <img src="https://img.icons8.com/ios/512/nightmare.png" alt="" />
                                <p>Nightmares</p>
                            </div>
                            <div className="inconsBlock__icon">
                                <img src="https://img.icons8.com/ios/512/skull-heart--v2.png" alt="" />
                                <p>Health issues</p>
                            </div>
                            <div className="inconsBlock__icon">
                                <img src="https://img.icons8.com/ios/512/family.png" alt="" />
                                <p>Problems with family</p>
                            </div>
                        </div>
                        <div className="hiddenMeditationMore">
                            <WhiteButton onClick = {readMore}>Read More</WhiteButton>
                        </div>
                    </div>
                    <div className="meditation_additionalInfo_modalWindow">
                        <div className="closeButton" onClick={hideReadMore}>

                        </div>
                        <div className="modalMeditationWrapper">
                            <div className="meditation_additionalInfo__text">
                                <p className="additionalInfo_content">
                                Turn the beam of your attention to the legs. The feet relax. They feel a pleasant warmth, reminiscent of the heat from the fire burning in the fireplace. It feels like your feet are standing on the grate. A kind, affectionate warmth rises up the legs, giving life-giving relaxation and rest to the muscles... The tension disappears... And now the muscles of the legs relax – from the fingertips to the hip... Breathing is even, calm. The heart beats clearly, rhythmically...
                                </p>
                                {/* <p className="additionalInfo_readMore"></p> */}
                            </div>
                            <div className="meditation_additionalnfo__iconsBlock">
                                <div className="inconsBlock__icon">
                                    <img src="https://img.icons8.com/external-outline-juicy-fish/512/external-stress-crisis-management-outline-outline-juicy-fish.png" alt="" />
                                    <p>Stress</p>
                                </div>
                                <div className="inconsBlock__icon">
                                    <img src="https://img.icons8.com/ios/512/nightmare.png" alt="" />
                                    <p>Nightmares</p>
                                </div>
                                <div className="inconsBlock__icon">
                                    <img src="https://img.icons8.com/ios/512/skull-heart--v2.png" alt="" />
                                    <p>Health issues</p>
                                </div>
                                <div className="inconsBlock__icon">
                                    <img src="https://img.icons8.com/ios/512/family.png" alt="" />
                                    <p>Problems with family</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="meditatoin_otherProducts">
                        

                    </div> */}
                    <div className="footer">
                        <Footer />
                    </div>
                </div>
            </div>
        );
        
    }

    export default MeditationPage