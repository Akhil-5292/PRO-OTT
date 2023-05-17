import React from 'react';
import SideBar from './SideBar/SideBar';
import style from './Shows/ShowPage.module.css'

function NewsPage() {
  return (
    <div >
       <SideBar/>
       <div className={style.container}> 
      <h2>News</h2>
      <img style={{height:'60vh', display:'flex', justifyContent:'center',width:'60vw' }} src='https://www.itl.cat/pngfile/big/284-2843659_poster-movie-film-movies-posters-wallpaper-movie-poster.jpg' alt='img'/>
    </div>
    </div>
  );
}

export default NewsPage;