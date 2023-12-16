import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SigninPage from './pages/SigninPage';
import NetflixPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/signin' element={<SigninPage />}/>
        <Route path='/' element={<NetflixPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
