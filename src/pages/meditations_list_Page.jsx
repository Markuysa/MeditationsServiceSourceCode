import HeaderMain from "../components/headers/header";
import HeaderSecondary from "../components/headers/headerSecondary";
import MeditationsList from "../components/meditationComponents/meditationsList";
import AsideBar from "../components/pageTemplates/asidebar";
import Footer from "../components/pageTemplates/footer";
import "../css/meditationsListPageStyles.css"
import React, { Component }  from 'react';
const MeditationsPage = (setSelectedMeditation)=>{
    console.log(setSelectedMeditation)
    const asideItems=([
        {title:"To relax"},{title:"To sleep"},{title:"To study"}
    ]);
    return (
        <div className="meditations_page-wrapper">
            <HeaderSecondary />
            <div className="meditations_page__content">
                <div className="meditations_page__content_asideBar">
                    {/* <AsideBar items={asideItems}/> */}
                    {/* <MeditationsList meditations={meditations}/> */}
                </div>
                <div className="meditations_page__content_list">
                    <MeditationsList setSelectedMeditation = {setSelectedMeditation}/>
                </div>
            </div>    
            <Footer />            
        </div>


    );
    
}


export default MeditationsPage;