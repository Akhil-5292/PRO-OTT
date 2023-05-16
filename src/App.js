import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import ShowsPage from './Components/ShowPage';
import MoviesPage from './Components/MoviesPage';
import ComedyPage from './Components/ComedyPage';
import NewsPage from './Components/NewsPage';
import NavBar from './Components/Navbar';
import SearchBar from './Components/SearchBar';
import SubscribeButton from './Components/SubscribeButton';
import LoginButton from './Components/LoginButton';

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
        </Routes>
        <SearchBar />
        <SubscribeButton />
        <LoginButton />
      </div>
    </Router>
  );
}

export default App;
