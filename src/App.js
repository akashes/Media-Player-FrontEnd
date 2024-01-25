import './App.css';
import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home';
import { Route,Routes } from 'react-router-dom';
import WatchHistory from './Pages/WatchHistory';
import Header from './Components/Header';
import Footer from './Components/Footer';import { useState } from 'react';


function App() {
  const[headerColor,setHeaderColor]=useState("#0093d5")

  return (
  <div>
    <Header headerColor={headerColor} />
    <Routes>
      <Route path='/' element={<LandingPage setHeaderColor={setHeaderColor} />}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/Watch-history' element={<WatchHistory/>}/>
    </Routes>
    <hr></hr>
    <Footer/>
  </div>
  );
}

export default App;
