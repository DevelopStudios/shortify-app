import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import ShortenForm from './ShortenForm/ShortenForm';
function App() {
  return (
    <div className="App">
        <Header/>
        <Banner/>
        <ShortenForm/>
    </div>
  );
}

export default App;
