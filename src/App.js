import React from 'react';
import './App.css';
import { Header, Footer } from './components';
import AnimalsList from './components/AnimalsList/AnimalsList.js'
import AnimalsFilter from './components/AnimalsFilter/AnimalsFilter';

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
        <Footer />
    </div>
  );
}

export default App;
