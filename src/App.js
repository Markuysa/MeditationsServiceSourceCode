import MainPage from './pages/main_page'
import Login from './pages/login'
import MeditationsPage from './pages/meditations_list_Page';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import { useState } from 'react';
import MeditationPage from './pages/meditationPage';
import SignUp from './pages/signUp';
import UserProfilePage from './pages/userProfilePage';
import ErrorPage from './pages/404Page';
function App() {

  const [meditations, setMeditations]= useState([
    {id:1,title: "Get alone with nature - hear the sounds of real wildlife to feel true happiness",img: "https://static.tildacdn.com/tild6431-3236-4235-a665-383862306136/dew_med.jpg",rating: 4.1, categories:["sleep","study"]},
    {id:2,title: "Discover true peace and tranquility with meditation to the sounds of the famous Tibetan meditation instrument",img: "https://all-mongolia.ru/wp-content/uploads/a/a/7/aa7b09b14283d07d71816651385652cb.jpeg",rating: 4.4, categories:["study"]},
    {id:3,title: "Meditations for sleep - calm your soul and let in the cosmic force",img: "https://etot-prazdnik.ru/wp-content/uploads/2019/05/2.png",rating: 4.0, categories:["relax","study"]},
    {id:4,title: "Get to know the true essence of existence on the planet, immerse yourself in your own universe - in your mind",img: "https://angelicmessages.com/wp-content/uploads/2020/06/FeelYOURAnswerMeditationWithArchangelMichael.jpg",rating: 5.0,categories:["relax","study"]},
    {id:5,title: "Realize the power of your subconscious - see your power",img: "https://content-27.foto.my.mail.ru/mail/xpiok/_mypagephoto/h-9935.jpg",rating: 3.1,categories:["relax","study"]},
    {id:6,title: "Feel how all the problems dissipate and only common sense and self-knowledge appear",img: "https://zozhnik.ru/wp-content/uploads/2016/12/%D0%BC%D0%B5%D0%B4%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D1%8F.jpg",rating: 4.2,categories:["relax","study"]},
    {id:7,title: "See the real world without earthly problems and adversities immerse yourself in the astral",img: "https://parsi-times.com/wp-content/uploads/2018/11/Noshir-1.jpg",rating: 4.5,categories:["relax","study"]}
  ])
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/meditations" element={<MeditationsPage meditations={meditations}/>} />
          <Route path="/meditation" element={<MeditationPage meditations={meditations}/>} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/errorPage" element={<ErrorPage/>} />
        </Routes>       
      </BrowserRouter>  
    </div>
  );
}

export default App;
