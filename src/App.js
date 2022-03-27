import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Header, Footer, Main, DogInfoPage } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <DogInfoPage />
      <Footer />
    </div>
  );
}

export default App;
