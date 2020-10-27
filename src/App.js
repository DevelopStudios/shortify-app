import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import ShortenForm from './ShortenForm/ShortenForm';
import About from './About/About';
import Footer from './Footer/Footer';
function App() {
  return (
    <div className="App">
        <Header/>
        <Banner/>
        <ShortenForm/>
        <About/>
        <Footer/>
    </div>
  );
}

export default App;
