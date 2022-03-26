import React from 'react';
import './App.css';
import { Header, Footer } from './components';
import AnimalsList from './components/AnimalsList/AnimalsList.js'
import AnimalsFilter from './components/AnimalsFilter/AnimalsFilter';
import CompanyInfo from './components/CompanyInfo/CompanyInfo';

function App() {
  return (
    ////          СТРАНИЦА ВСЕ ПИТОМЦЫ
    // <div className="App">
    //   <Header />
    //   <AnimalsFilter/>
    //   <AnimalsList/>
    //   <Footer />
    // </div>
    <div className="App">
        <Header />
        <CompanyInfo/>
        <Footer />
    </div>
  );
}

export default App;
