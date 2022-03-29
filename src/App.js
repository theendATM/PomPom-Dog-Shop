import React from 'react';
import './App.css';
import { Header, Footer, DogInfoBox, MainDogCard } from './components';
import { DogInfoPage } from './pages/DogInfoPage';
import AnimalsList from './components/AnimalsList/AnimalsList.js'
import AnimalsFilter from './components/AnimalsFilter/AnimalsFilter';
import CompanyInfo from './components/CompanyInfo/CompanyInfo';
import AuthorizationLogIn from './components/Authorization/AuthorizationLogIn';
import AuthorizationSignUp from './components/Authorization/AuthorizationSignUp';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { AllPets } from './pages/AllPets';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/all' element={<AllPets />} />
        <Route path='' element={<DogInfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
