import React, { Component }  from 'react';
import '../../css/secondaryPages.css'
import PageLeftAlign from './pageLeftAlign';
import PageRightAlign from './pageRIghtAlign';

const Page = ({page})=>{
    
    return(
        page.id==2
                ?<PageLeftAlign page = {page}/>
                :<PageRightAlign page = {page}/>
    );
}
export default Page;