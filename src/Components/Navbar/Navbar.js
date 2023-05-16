import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import SubscribeButton from '../SubscribeButton';
import LoginButton from '../LoginButton';
import style from './Navbar.module.css'
import BasicMenu from '../Dropdown';

function NavBar() {
  return (
    <nav className={style.nav}>
      <h3>PRO OTT</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shows"><BasicMenu/></Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/comedy">Comedy</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <SearchBar />
        <SubscribeButton />
        <LoginButton />
      </ul>
    </nav>
  );
}

export default NavBar;
