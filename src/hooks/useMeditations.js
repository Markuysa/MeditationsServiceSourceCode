import {useMemo} from 'react'
import { IoCloseOutline } from 'react-icons/io5';

export const useSortedMeditations = (meditations,selectedSort)=>{
    
    const sortedMeditations= useMemo(()=>{
        if (selectedSort){
            return [...meditations].sort( (a , b) => String(a[selectedSort]).localeCompare(String(b[selectedSort]))) 
        }
        return meditations;
    },[selectedSort,meditations]);

    return sortedMeditations;

}

export const useSortedAndSearchMeditations = (meditations,selectedSort,searchQuery,selectedFilter)=>{
    const sortedMeditations=useSortedMeditations(meditations,selectedSort);
    const sortedFilteredMeditations = useFiltered(sortedMeditations,selectedFilter);
    const sortedAndSearchedMeditations = useMemo(()=>{
        return sortedFilteredMeditations.filter(meditation => meditation.title.toLowerCase().includes(searchQuery.toLowerCase()))
    },[sortedFilteredMeditations,searchQuery])    

    return sortedAndSearchedMeditations;
}

export const useFiltered = (meditations,selectedFilter)=>{
    const sortedFilteredMeditations= useMemo(()=>{
        if (selectedFilter){
            return [...meditations].filter(meditation => meditation.categories == selectedFilter)
        }
        return meditations;
    },[selectedFilter,meditations]);

    return sortedFilteredMeditations;

}