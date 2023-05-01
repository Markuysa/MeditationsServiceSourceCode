import '../../css/meditations_list.css'
import Meditation from "./meditation_card";
import MeditationsSelect from '../../UI/select/MeditationsSelect';
import { useMemo, useState } from 'react';
import { useSortedAndSearchMeditations } from '../../hooks/useMeditations.js';
import InputField from '../../UI/InputField/InputFiels';   
import axios from 'axios'
import { useEffect } from 'react';
import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation';
import { redirect } from 'react-router-dom';
import React, { Component }  from 'react';
const MeditationsList= (setSelectedMeditation)=>{
    async function fetchPosts() {
        const responce = await axios.get("http://localhost:8080/api/meditations/all")
        setMeditationsList(responce.data)
    }
    const [meditationsList,setMeditationsList] = useState('')
    const [searchQuery, setSearchQuery]= useState('')
    const [selectedSort,setSelectedSort]=useState('')
    const [selectedFilter,setSelectedFilter]=useState('')
    const [optionsList, setOptionsList]=useState([
        {name:"By rating",value: "rating"},
        {name:"By name",value: "title"}
    ]);
    const [optionsListFilter, setOptionsListFilter]=useState([
        {name:"To sleep",value: "sleep"},
        {name:"To study",value: "study"},
        {name:"To relax",value: "relax"}
    ]);
    //const sortedAndSearchedMeditationsFilter = useSortedAndSearchMeditations(meditationsList,selectedSort,searchQuery,selectedFilter)
    const sortMeditations = (sort) =>{
        setSelectedSort(sort)
        alert(selectedSort)
    }
    const fitlerMeditations = (filter)=>{
        setSelectedFilter(filter)
        alert(selectedFilter)
    }
    useEffect(()=>{
        fetchPosts()
    },[])


    useEffect(()=>{
        
        let listMditationsHTML = document.querySelector(".meditationsList")

        listMditationsHTML.addEventListener('click',(event)=>{
            let target = event.target.closest("li")
            if (!target) return;

            if (!listMditationsHTML.contains(target)) return
            let id = target.querySelector('.meditationID')
            
            //setSelectedMeditation(meditationsList[Number(id.innerText)])

        })
    },[])

    return (
        <div className="meditations_list_cards">
            <div className="search_fields">
                <div className="search_fields__select">
                    <div className="search_fields__select">
                        <MeditationsSelect 
                            defaultValue={"Sort by"} 
                            options = {optionsList} 
                            value={selectedSort}    
                            onChange = {sortMeditations}
                        />
                    </div>
                    <div className="filter_fields__select">
                        <MeditationsSelect 
                            defaultValue={"Filter by category"} 
                            options = {optionsListFilter} 
                            value={selectedFilter}    
                            onChange = {fitlerMeditations}
                        />
                    </div>
                </div>
                <div className="search_fields__search">
                    <InputField 
                        placeholder ="Filter meditations"
                        value = {searchQuery}
                        onChange = {event => setSearchQuery(event.target.value)}
                    />
                </div>
            </div>
            <div className="meditations_content">
                <ul className='meditationsList'>
                    {meditationsList.length
                        ?meditationsList.map( (meditation)=>
                            <Meditation 
                                meditation = {meditation} 
                                key={meditation.id} 
                            />
                        )           
                        : <div className="notFoundPage"><p>No results</p></div>
                    }
                </ul>
            </div>
        </div>

    );



};

export default MeditationsList;