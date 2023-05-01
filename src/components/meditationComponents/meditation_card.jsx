
import '../../css/meditation_card.css'
import { Link } from "react-router-dom";
import React from 'react';
const Meditation = (props)=>{
    console.log(props)
    return(
        <li className="meditation-card-wrapper">
            <h1 className='meditationID' style={{display:"none"}}>{props.meditation.id}</h1>
              <Link to={`/meditations/${props.meditation.id}`} className="meditation">
                    <div className="meditation-card__image">
                        <img src={props.meditation.image} alt="" />
                    </div>
                    <div className="meditation-card__textContent">
                        <p>{props.meditation.title}</p>
                        <div className="meditation-card__textContent__readMore">
			<span className="icon"><a href="">read more</a></span>		
                            <span className='textContent__rating'>{props.meditation.rating}</span>
                        </div>
                    </div>
                    <div className="like_button">
                        <div className="content">
                            <img className ="heart" src="/img/icons8-червы-18.png" alt=""></img>
                        </div>
                    </div>
                </Link> 
            </li>
        )
}
export default Meditation;