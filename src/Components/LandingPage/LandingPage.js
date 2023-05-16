import React from 'react';
import Slider from '../Slider/Slider';
import style from './LandingPage.module.css'
import MenuBar from '../Menubar/Menubar';
import SideBar from '../SideBar/SideBar';

function LandingPage() {
  return (
    <div className={style.wrapper}>
      <SideBar/>
      <div>
      <Slider />
      <MenuBar/>
      </div>
    </div>
  );
}

export default LandingPage;