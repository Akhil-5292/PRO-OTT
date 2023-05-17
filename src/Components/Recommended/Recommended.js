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
        imageUrl="https://collider.com/wp-content/uploads/the-avengers-movie-poster-banners-03.jpg"
        description="Avengers: Age of Ultron the Action/Sci-fi movie is a 2015 superhero film, based on the Marvel Comics superhero team of the same name. 
        The film is a sequel to The Avengers, Iron Man 3, Thor: The Dark World, and Captain America: The Winter Soldier. It is the eleventh film in the Marvel Cinematic Universe,
         and the fifth installment of Phase Two. The film was released on April 22, 2015 internationally and on May 1, 2015 in the United States."
      />
      </div>
    </div>
  );
}

export default Recommended;
