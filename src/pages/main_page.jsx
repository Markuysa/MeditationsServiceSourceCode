import Footer from "../components/pageTemplates/footer";
import React, { Component }  from 'react';
import HeaderMain from "../components/headers/header";
import '../css/main_page.css'
import SecondMainPage from "../components/pageTemplates/second_mainPage";
import HeaderSecondary from "../components/headers/headerSecondary";
import FirstPageSecondary from "../components/pageTemplates/firstPageSecondary";
import ThirdMainPage from "../components/pageTemplates/thirdMainPage";
const MainPage = () =>{
    const scrollDown = () =>{
        window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: "smooth"
        });
    };
    const pagesContent = ([
        {id:1,title:"Determining Your level of awareness",topTitle:"Get Started",description: "Before starting classes, it is necessary to determine your level of preparedness for such a difficult path of cognition and awareness. To do this, you should take a small test, which will determine your level. Are you ready to start your journey? ",img:"D:/Рабочий стол/FrontendCourseWork/frontend_coursework/src/img/contentImages/2.png"},
        {id:2,title:"We select the appropriate course",topTitle:"The beginning",description: "Judging by your level, we will determine thefor such a difficult path of cognition and awareness. To do this, you should take a small test most suitable course of classes that will help you start the path of self-knowledge and awareness ",img:"D:/Рабочий стол/FrontendCourseWork/frontend_coursework/src/img/contentImages/background_login.png"},
        {id:3,title:"Start the classes",topTitle:"Enjoy the journey",description: "it's time to start real classes and start for such a difficult path of cognition and awareness. To do this, you should take a small test your journey to the halls of the mind. Good luck for such a difficult path of cognition and awareness ",img:"D:/Рабочий стол/FrontendCourseWork/frontend_coursework/src/img/contentImages/background_login.jng"}
    ]);
    return (
        <div className="main-wrapper">
            <div className="first_page">
                <HeaderMain />
                {/* <HeaderSecondary /> */}
                <div className="main__firstPage">
                    <div className="firstPage__title">
                        <div className="firstPage_title__header">
                            <span className="title__header_rect">Meditation service</span>
                        </div>
                        <div className="firstPage_title_descriprion">
                            <h1>Be Prepared To <br /> Comprehend The True Being</h1>
                        </div>
                        <div className="firstPage_title_scrollButton">
                            <button onClick={scrollDown}><span className="title__scrollButton">scroll down</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second_landing">
                <FirstPageSecondary page={pagesContent[0]}/>
            </div>
            <div className="third_landing">
                <SecondMainPage page={pagesContent[1]}/>
            </div>
            <div className="fourth_landing">
                <ThirdMainPage page ={pagesContent[2]}/>
            </div>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    )   

}

export default MainPage;