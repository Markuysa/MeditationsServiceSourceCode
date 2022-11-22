import '../../css/meditations_list.css'
import Meditation from "./meditation_card";
import MeditationsSelect from '../../UI/select/MeditationsSelect';
import { useMemo, useState } from 'react';
import { useSortedAndSearchMeditations } from '../../hooks/useMeditations.js';
import InputField from '../../UI/InputField/InputFiels';   
import axios from 'axios'
import { useEffect } from 'react';
const MeditationsList= ({meditations, onMeditationsChange})=>{

    // async function fetchMeditations(){
    //     //const meditationsList = await axios.get('https://jsonplaceholder.typicode.com/photos') for external downloadin
    //     // Here could be implemented a downloading information from the back server (coming soon...)
    //     setTimeout(() => {
            
    //         onMeditationsChange(meditations);
    //     }, 1000);
    // }

    // useEffect( ()=>{
    //     fetchMeditations();
    //     console.log("fetch")
    // },[])

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

    const sortMeditations = (sort) =>{
        setSelectedSort(sort)
        
    }
    const fitlerMeditations = (filter)=>{
        setSelectedFilter(filter)
    }
    const sortedAndSearchedMeditationsFilter = useSortedAndSearchMeditations(meditations,selectedSort,searchQuery,selectedFilter);
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
                {sortedAndSearchedMeditationsFilter.length
                    ?sortedAndSearchedMeditationsFilter.map( (meditation)=>
                        <Meditation 
                            meditation = {meditation} 
                            key={meditation.id} 
                        />
                    )           
                    : <div className="notFoundPage"><p>No results</p></div>
                }
            </div>
        </div>

    );



};

export default MeditationsList;