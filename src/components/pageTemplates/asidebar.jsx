import { useEffect, useState } from "react";
import "../../css/asideBar.css"
import React, { Component }  from 'react';
const AsideBar = ({items})=>{
    let listItem
    useEffect(()=>{
        listItem = document.querySelectorAll(".asideBarItem");
    })
    const onAsideClick = (index)=>{
        listItem[index].classList.add("active")
        for (let i=0;i<listItem.length;i++){
            
            if (listItem[i].classList.contains("active")){
                listItem[i].classList.remove("active")
                listItem[i].style.backgroundColor = "white"
                listItem[i].style.color = "black"
            }
        } 
    }
    const [selectedFilter,setSelectedFilter]  = useState('');
    return (
        <div className="asideBarItems">
            <ul>
                {/* // items.map(item=>{
                //     <li className="asideBarItem">{item.title}</li>
                // })    */}
                <li className="asideBarItem" onClick={onAsideClick} >To sleep</li>
                <li className="asideBarItem" onClick={onAsideClick}>To study</li>
                <li className="asideBarItem" onClick={onAsideClick}>To relax</li>
            </ul>
        </div>
    );
    

}


export default AsideBar;