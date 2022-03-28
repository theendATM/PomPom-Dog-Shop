import React from 'react';
import './App.css';
import { Header, Footer } from './components';
import AnimalsList from './components/AnimalsList/AnimalsList.js'
import AnimalsFilter from './components/AnimalsFilter/AnimalsFilter';
import CompanyInfo from './components/CompanyInfo/CompanyInfo';
import AuthorizationLogIn from './components/Authorization/AuthorizationLogIn';
import AuthorizationSignUp from './components/Authorization/AuthorizationSignUp';
import { Router } from 'react-router-dom';

function App() {
  return (
    ////          СТРАНИЦА ВСЕ ПИТОМЦЫ
    // <div className="App">
    //   <Header />
    //   <AnimalsFilter/>
    //   <AnimalsList/>
    //   <Footer />
    // </div>

    // //             СТРАНИЦА О НАС
    // <div className="App">
    //     <Header />
    //     <CompanyInfo/>
    //     <Footer />
    // </div>

    <div className="App">
      <AuthorizationLogIn />
    </div>
  );
}

export default App;
