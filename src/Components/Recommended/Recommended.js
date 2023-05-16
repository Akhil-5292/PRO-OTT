import React from 'react';
import ShowToggle from '../ShowToggle';
// import style from './ShowPage.module.css'

function Recommended() {
  return (
    <div > 
      <ShowToggle
        title="Recommended for you"
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkIfDPcmuFr_XvXNuxvENzzFNR9kS2F9iKLw&usqp=CAU"
        description="Description for recommended shows"
      />
    </div>
  );
}

export default Recommended;
