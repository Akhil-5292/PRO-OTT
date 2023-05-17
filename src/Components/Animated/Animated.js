import React from 'react';
import ShowToggle from '../ShowToggle';
import style from '../Shows/ShowPage.module.css'
import SideBar from '../SideBar/SideBar';

function Animated() {
  return (
    <div className={style.wrapper}> 
      <SideBar/>
      <div className={style.container}>
      <h2>Animated</h2>
      <ShowToggle
        title="Animated Adventures"
        imageUrl="https://images.fandango.com/images/fandangoblog/Fan_Scoob_banner_blog_20200504.jpg"
        description="Scooby-Doo, American animated cartoon series featuring the adventures of Scooby-Doo, a talking Great Dane, and his mystery-solving teenage companions.
        Scooby-Doo is the eponymous character and protagonist of the animated television franchise, created in 1969 by the American animation company Hanna-Barbera.
         He is a male Great Dane and lifelong companion of amateur detective Shaggy Rogers, with whom he shares many personality traits. He features a mix of both canine and human behaviors (reminiscent of other talking animals in Hanna-Barbera's series), and is treated by his friends more or less as an equal."
      />
     </div>
    </div>
  );
}

export default Animated;
