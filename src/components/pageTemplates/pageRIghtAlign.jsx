import React, { Component }  from 'react';
const PageRightAlign= ({page})=>{
    
    return (

        <div className="page-wrapper">
                    <div className="page-wrapper-content">
                        <div className="page-wrapper-content__numberImage">
                        </div>
                        <div className="page-wrapper-content__text">
                            <span className="text__header_top">{page.topTitle}</span>
                            <h2 className="text__header_title">{page.title}</h2>
                            <h3 className="text__header_description">{page.description}</h3>
                            <span className="text__header_readMore">read more</span>
                        </div>
                        <div className="page-wrapper-content__image">
                            {/* <img src = {require('D:/Рабочий стол/FrontendCourseWork/frontend_coursework/src/img/contentImages/2.png')} alt="an image" />   */}
                        </div>
                </div>
        </div>
    );
}

export default PageRightAlign;