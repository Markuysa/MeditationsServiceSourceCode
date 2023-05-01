import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../css/profile.css';
import { useParams } from "react-router-dom";
function Profile({ match }) {
  const [user, setUser] = useState(null);
  let { id } = useParams();
  
  useEffect(() => {
      async function getUser() {
        try {
          const token = localStorage.getItem('jwt');
          const response = await axios.get(`http://localhost:8080/user/${id}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          console.log(response.data)
          setUser(response.data);
        } catch (error) {
          console.error(error);
        }
      }

    getUser();
  }, [id]);

  if (!user) {
    return <div>Загрузка...</div>;
  }
  const redirectMeditation = (id) => {
    window.location.replace(`/meditations/${id}`);
  };
  return (
    <div className="profile">
      <div className="profile__header">
        <h2 className="profile__username">{user.username}</h2>
      </div>
      <div className="profile__content">
        <div className="profile__email">{user.email}</div>
        <h3 className='fav'>Roles:</h3>
        <ul className="profile_authorities" >
          {user.authorities.map((authority)=>(
          <div className="profile_authority">
            {authority && <div className="profile__role">{authority.authority}</div>}
          </div>
          ))} 
        </ul>
        <div className="profile__meditations">
          <h3 className='fav'>Избранные медитации:</h3>
          {user.meditations.length > 0 ? (
            <ul className="profile__meditation-list">
              {user.meditations.map((meditation) => (
                <li className="profile__meditation" onClick={() => redirectMeditation(meditation.id)} key={meditation.id}>
                  {meditation.image && (
                    <img className="profile__meditation-image" src={meditation.image} alt="" />
                  )}
                  <h4 className="profile__meditation-title">{meditation.title}</h4>
                  {meditation.rating && <div className="profile__meditation-rating">{meditation.rating}</div>}
                </li>
              ))}
            </ul>
          ) : (
            <div>Список избранных медитаций пуст</div>
          )}
        </div>
      </div>
    </div>
  );
}

Profile.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Profile;