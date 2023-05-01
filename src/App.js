import MainPage from './pages/main_page'
import Login from './pages/login'
import MeditationsPage from './pages/meditations_list_Page';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import MeditationPage from './pages/meditationPage';
import SignUp from './pages/signUp';
import ErrorPage from './pages/404Page';
import React, { Component }  from 'react';
import Profile from './pages/userProfilePage';
function App() {

  const [selectedMeditation,setSelectedMeditation]= useState('')

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/meditations" element={<MeditationsPage setSelectedMeditation={setSelectedMeditation}/>} />
          <Route path="/meditations/:id" element={<MeditationPage/>} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/profile/:id" element={<Profile/>} />
          <Route path="/errorPage" element={<ErrorPage/>} />
        </Routes>       
      </BrowserRouter>  
    </div>
  );
}

export default App;
