import React, { Component }  from 'react';
const PageLeftAlign= ({page})=>{
    return (
        <div className="page-wrapper">
                    <div className="page-wrapper-content">

                        <div className="page-wrapper-content__image">
                            <div className="page-wrapper-content__image__item">
                            {/* <img src = {require(page.img)} alt="an image" />   */}
                            </div>
                        </div>
                        <div className="textContentPage">
                            <div style={{right:0 }} className="page-wrapper-content__numberImage">
                            </div>
                            <div className="page-wrapper-content__text">
                                <span className="text__header_top">{page.topTitle}</span>
                                <h2 className="text__header_title">{page.title}</h2>
                                <h3 className="text__header_description">{page.description}</h3>
                                <span className="text__header_readMore">read more</span>
                            </div>
                        </div>
                </div>
        </div>
    );
}

export default PageLeftAlign;