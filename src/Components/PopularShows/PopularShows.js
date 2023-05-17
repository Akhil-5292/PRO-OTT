import React from 'react';
import ShowToggle from '../ShowToggle';
import style from '../Shows/ShowPage.module.css'
import SideBar from '../SideBar/SideBar';

function PopularShows() {
  return (
    <div className={style.wrapper}>
        <SideBar/> 
        <div className={style.container}>
      <h2>Popular Shows/Drama</h2>
      <ShowToggle
        title="Popular Shows/Drama"
        imageUrl="https://static.toiimg.com/photo/65620692/size-139089/65620692.jpg"
        description="Gold a Comedy/Crime film is based on the journey of India's first national hockey team to the 1948 Summer Olympics and follows Tapan Das, 
        the man who won India its first gold medal in the same event. Gold was theatrically released on 15 August 2018 during India's Independence Day to universal critical acclaim.
         A major box office hit, the film grossed ₹158 crore (US$20 million) at the box office. Gold also became the first Bollywood film to be released in Saudi Arabia. It was also released in Chinese theatres on 13 December 2019."
      />
      </div>
    </div>
  );
}

export default PopularShows;
