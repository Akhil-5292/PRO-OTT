import React from 'react';
import SideBar from './SideBar/SideBar';
import style from './Shows/ShowPage.module.css'

function MoviesPage() {
  return (
    <div>
       <SideBar/> 
       <div className={style.container}>
      <h2>Movies</h2>
      <img src='https://c4.wallpaperflare.com/wallpaper/181/190/500/aquaman-2018-movie-banner-textless-wallpaper-preview.jpg' alt='img'/>
    </div>
    </div>
  );
}

export default MoviesPage;
