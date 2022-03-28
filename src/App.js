import React from 'react';
import './App.css';
import { Header, Footer } from './components';
import AnimalsList from './components/AnimalsList/AnimalsList.js'
import AnimalsFilter from './components/AnimalsFilter/AnimalsFilter';
import CompanyInfo from './components/CompanyInfo/CompanyInfo';
import AuthorizationLogIn from './components/Authorization/AuthorizationLogIn';
import AuthorizationSignUp from './components/Authorization/AuthorizationSignUp';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>

          <Route path='/signup' element={<AuthorizationSignUp />} />
          <Route path='/login' element={<AuthorizationLogIn />} />


        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
