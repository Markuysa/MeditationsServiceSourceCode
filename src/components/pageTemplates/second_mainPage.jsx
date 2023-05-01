import React, { Component }  from 'react';
import Page from "./page";
import "../../css/secondaryPagesStyle.css"

const SecondMainPage= ({page})=>{
    return (
        <div className="page-wrapper">
                    <div className="page-wrapper__content">

                        <div className="page-wrapper-content__image second">
                            <div className="page-wrapper-content__image__item">
                            
                            </div>
                        </div>
                        <div className="textContentPage">
                            <div style={{right:0 }} className="page-wrapper-content__numberImage second">
                            </div>
                            <div className="page-wrapper-content__text">
                                <span className="text__header_top">{page.topTitle}</span>
                                <h2 className="text__header_title">{page.title}</h2>
                                <h3 className="text__header_description">{page.description}</h3>
                                <a href="/errorPage"><span className="text__header_readMore">read more</span></a>
                            </div>
                        </div>
                </div>
        </div>
    );
}


export default SecondMainPage;