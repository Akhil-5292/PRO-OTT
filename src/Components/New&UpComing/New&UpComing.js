import React from 'react';
import ShowToggle from '../ShowToggle';
import style from '../Shows/ShowPage.module.css'
import SideBar from '../SideBar/SideBar';

function UpComing() {
  return (
    <div className={style.wrapper}> 
    <SideBar/>
    <div className={style.container}>
      <h2>New & Upcoming</h2>
      <ShowToggle
        title="New & Upcoming"
        imageUrl="https://w0.peakpx.com/wallpaper/625/268/HD-wallpaper-x-men-days-of-future-past-banner-x-men-movies-banner.jpg"
        description="X-Men is a 2000 American superhero film depicts a world where an unknown proportion of people are mutants, whose possession of superhuman powers makes them distrusted by normal humans. 
        It focuses on mutants Wolverine and Rogue as they are brought into a conflict between two groups that have radically different approaches to bringing about the acceptance of mutant-kind: Charles Xavier's X-Men, and the Brotherhood of Mutants, led by Magneto."
      />
      </div>

    </div>
  );
}

export default UpComing;
