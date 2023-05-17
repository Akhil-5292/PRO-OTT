import React from 'react';
import SideBar from './SideBar/SideBar';
import style from './Shows/ShowPage.module.css'

function ComedyPage() {
  return (
    <div>
       <SideBar/> 
      <div className={style.container}> 
      <h2>Comedy</h2>
      <img style={{height:'60vh'}} src='https://wallpaperaccess.com/full/3726114.jpg' alt='img'/> 
    </div>
    </div>
  );
}

export default ComedyPage;