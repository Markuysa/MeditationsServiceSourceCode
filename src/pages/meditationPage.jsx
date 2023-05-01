
import { useEffect } from "react";
import HeaderSecondary from "../components/headers/headerSecondary";
import MeditationPageSlider from "../components/meditationComponents/meditationPageSlider";
import { useParams } from "react-router-dom";
import { useState } from 'react';
import Footer from "../components/pageTemplates/footer";
import ModalVideo from "../components/pageTemplates/modalVideo";
import React, { Component }  from 'react';
import "../css/meditationPageStyles.css"
import Button from "../UI/Blackbutton/BlackButton";
import WhiteButton from "../UI/whiteButton/WhiteButton";
    const MeditationPage = ()=>{
        let { id } = useParams();
        const [comment, setComment] = useState(null);
        const [comments, setComments] = useState([]);

        const handleCommentChange = (event) => {
          setComment(event.target.value);
        }
        
        const handleSubmitComment = async () => {
            var user_id = localStorage.getItem('id')

            const commentData = {
                userId: Number(user_id),
                meditationId: Number(id),
                body: comment,
                createdAt: new Date(),
              };
            console.log(JSON.stringify(commentData))
          const response = await fetch(`http://localhost:8080/api/meditations/${id}/comments`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify(commentData)
          });
          const newComment = await response.json();
          setComments([...comments, newComment]);
          setComment('');
        }
        useEffect(() => {
            const fetchComments = async () => {
              const response = await fetch(`http://localhost:8080/api/meditations/${id}/comments`, {
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                }
              });
              const comments = await response.json();
              setComments(comments);
            }
            fetchComments();
          }, [id]);
        let modalReadMore
        useEffect(()=>{
            modalReadMore = document.querySelector(".meditation_additionalInfo_modalWindow")
        })  
        const readMore = ()=>{
            modalReadMore.style.visibility ="visible";
            modalReadMore.style.opacity ="1";

        }
        const hideReadMore = ()=>{

            modalReadMore.style.visibility ="collapse";
            modalReadMore.style.opacity ="0";
        }
        const [meditation, setMeditation] = useState(null);
        const [myString, setMyString] = useState("");
        const [myVideo, setMyVideo] = useState("");
        var index = 0
        var categories = ""
        useEffect(() => {
            fetch(`http://localhost:8080/api/meditations/${id}`)
            .then(response => response.json())
            .then(data => {
                setMeditation(data);
                data.categories.forEach((element)=>{
                    if (data.categories.length == index){
                        return
                    }else{
                        categories += "to " + element.name + " "
                    }
                    index += 1
                })
                if (data.categories.length == 0){
                    categories = "no categories"
                }
                setMyString(categories)
                setMyVideo(data.video)
            })
            .catch(error => console.log(error))
        }, [id]);

        if (meditation === null) {
            return <div style={{fontSize: 64 +"px"}}>Loading...</div>;
        }
        function getUsername(id){
            fetch(`http://localhost:8080/user/${id}`)
            .then(response => {
              if (!response.ok) {
                throw new Error('Failed to fetch user');
              }
              return response.json();
            })
            .then(data => {
              return data.username
            })
            .catch(error => {
              return ""
            });
        }
        return(
            // <MeditationPageSlider />
            <div className="meditationPage-wrapper">
                <HeaderSecondary />
                <div className="meditationPage-wrapper__content">
                    <div className="content__meditation_block">
                        <div className="meditation_block__imageSwiper">
                            
                            <img src={meditation.image} alt="" />

                        </div>
                        <div className="meditation_block__textContent">
                            
                            <div className="textContent__title">
                                <h1>MEDITATIONS AFTER STRESS</h1>
                                <div className="textContent__categories">
                                    <h2>Category: {myString}</h2>
                                </div>
                            </div>  
                            <div className="textContent__description">
                                <p>{meditation.description + meditation.description}
                                </p>
                            </div>
                            <div className="textContent__buttons">
                                {/* <WhiteButton>Start</WhiteButton> */}
                                <ModalVideo video={myVideo}/>
                                <WhiteButton>Add to favorite</WhiteButton>
                            </div>
                        </div>
                    </div>
                    <div className="meditation_additionalInfo">
                        <div className="meditation_additionalInfo__text">
                            <p className="additionalInfo_content">
                            This meditation is perfect for a morning routine to help prepare your mind for the day ahead or at the end of a hectic day to help ease stress and anxiety. At the start, you’ll get right into body awareness and deep belly breathing. Then, you'll focus on calming racing thoughts. She often pauses to let you just focus on breathing (while listening to waves), which can be difficult for someone with anxiety.
                            </p>
                            {/* <p className="additionalInfo_readMore"></p> */}
                        </div>
                        <div className="meditation_additionalnfo__iconsBlock">
                            <div className="inconsBlock__icon">
                                <img src="https://img.icons8.com/external-outline-juicy-fish/512/external-stress-crisis-management-outline-outline-juicy-fish.png" alt="" />
                                <p>Stress</p>
                            </div>
                            <div className="inconsBlock__icon">
                                <img src="https://img.icons8.com/ios/512/nightmare.png" alt="" />
                                <p>Nightmares</p>
                            </div>
                            <div className="inconsBlock__icon">
                                <img src="https://img.icons8.com/ios/512/skull-heart--v2.png" alt="" />
                                <p>Health issues</p>
                            </div>
                            <div className="inconsBlock__icon">
                                <img src="https://img.icons8.com/ios/512/family.png" alt="" />
                                <p>Problems with family</p>
                            </div>
                        </div>
                        <div className="hiddenMeditationMore">
                            <WhiteButton onClick = {readMore}>Read More</WhiteButton>
                        </div>
                    </div>
                    <div className="meditation_additionalInfo_modalWindow">
                        <div className="closeButton" onClick={hideReadMore}>

                        </div>
                        <div className="modalMeditationWrapper">
                            <div className="meditation_additionalInfo__text">
                                <p className="additionalInfo_content">
                                Turn the beam of your attention to the legs. The feet relax. They feel a pleasant warmth, reminiscent of the heat from the fire burning in the fireplace. It feels like your feet are standing on the grate. A kind, affectionate warmth rises up the legs, giving life-giving relaxation and rest to the muscles... The tension disappears... And now the muscles of the legs relax – from the fingertips to the hip... Breathing is even, calm. The heart beats clearly, rhythmically...
                                </p>
                                {/* <p className="additionalInfo_readMore"></p> */}
                            </div>
                            <div className="meditation_additionalnfo__iconsBlock">
                                <div className="inconsBlock__icon">
                                    <img src="https://img.icons8.com/external-outline-juicy-fish/512/external-stress-crisis-management-outline-outline-juicy-fish.png" alt="" />
                                    <p>Stress</p>
                                </div>
                                <div className="inconsBlock__icon">
                                    <img src="https://img.icons8.com/ios/512/nightmare.png" alt="" />
                                    <p>Nightmares</p>
                                </div>
                                <div className="inconsBlock__icon">
                                    <img src="https://img.icons8.com/ios/512/skull-heart--v2.png" alt="" />
                                    <p>Health issues</p>
                                </div>
                                <div className="inconsBlock__icon">
                                    <img src="https://img.icons8.com/ios/512/family.png" alt="" />
                                    <p>Problems with family</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="commentsTitle">
                         <h1 className="commentTitle">Comments</h1>
                    </div>
                    {comments.map(comment => 
                        <div key={comment.id} onClick={() => window.location.href = `/profile/${comment.userID}`}  className="deck-wrap">
                            <div class="deck">
                                <div class="card">
                                    <div class="cardHeader">
                                        <p>Anonymous</p>
                                    </div>
                                    <div class="cardBody">
                                        <p>{comment.body}</p>
                                    </div>
                                    <div class="cardFooter">{comment.createdAt}</div>        
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="inputArea">
                         <textarea value={comment} onChange={handleCommentChange} className="inputField"/>
                        <button disabled={
                            localStorage.getItem("id") == undefined
                        } onClick={handleSubmitComment} className="commentButton">Send</button>
                    </div>
                    <div className="footer">
                        <Footer />
                    </div>
                </div>
            </div>
        );
        
    }

    export default MeditationPage