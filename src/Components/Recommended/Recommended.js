import React from 'react';
import ShowToggle from '../ShowToggle';
import style from '../Shows/ShowPage.module.css'
import SideBar from '../SideBar/SideBar';

function Recommended() {
  return (
    <div className={style.wrapper}> 
    <SideBar/>
    <div className={style.container}>
    <h2>Recommended</h2>
      <ShowToggle
        title="Recommended for you"
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkIfDPcmuFr_XvXNuxvENzzFNR9kS2F9iKLw&usqp=CAU"
        description="Description for recommended shows"
      />
      </div>
    </div>
  );
}

export default Recommended;
