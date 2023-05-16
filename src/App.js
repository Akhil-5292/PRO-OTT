import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import ShowsPage from './Components/Shows/ShowPage';
import MoviesPage from './Components/MoviesPage';
import ComedyPage from './Components/ComedyPage';
import NewsPage from './Components/NewsPage';
import NavBar from './Components/Navbar/Navbar';
import Recommended from './Components/Recommended/Recommended';


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/shows" element={<ShowsPage/>} />
        <Route path="/movies" element={<MoviesPage/>} />
        <Route path="/comedy" element={<ComedyPage/>} />
        <Route path="/news" element={<NewsPage/>} />
        <Route path="/recommended" element={<Recommended/>} />
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
