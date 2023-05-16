import React from 'react';
import ShowToggle from '../ShowToggle';
import style from './ShowPage.module.css'

function ShowsPage() {
  return (
    <div className={style.wrapper}> 
      <h2>Shows</h2>
      <ShowToggle
        title="Recommended for you"
        imageUrl="https://c4.wallpaperflare.com/wallpaper/869/847/751/movies-hollywood-movies-wallpaper-preview.jpg"
        description="Avengers: Age of Ultron the Action/Sci-fi movie is a 2015 superhero film, based on the Marvel Comics superhero team of the same name. 
        The film is a sequel to The Avengers, Iron Man 3, Thor: The Dark World, and Captain America: The Winter Soldier. It is the eleventh film in the Marvel Cinematic Universe, and the fifth installment of Phase Two. The film was released on April 22, 2015 internationally and on May 1, 2015 in the United States."
      />
      <ShowToggle
        title="Animated Adventures"
        imageUrl="https://images.fandango.com/images/fandangoblog/Fan_Scoob_banner_blog_20200504.jpg"
        description="Scooby-Doo, American animated cartoon series featuring the adventures of Scooby-Doo, a talking Great Dane, and his mystery-solving teenage companions.
        Scooby-Doo is the eponymous character and protagonist of the animated television franchise, created in 1969 by the American animation company Hanna-Barbera.
         He is a male Great Dane and lifelong companion of amateur detective Shaggy Rogers, with whom he shares many personality traits. He features a mix of both canine and human behaviors (reminiscent of other talking animals in Hanna-Barbera's series), and is treated by his friends more or less as an equal."
      />
      <ShowToggle
        title="Popular Shows/Drama"
        imageUrl="https://static.toiimg.com/photo/65620692/size-139089/65620692.jpg"
        description="Gold a Comedy/Crime film is based on the journey of India's first national hockey team to the 1948 Summer Olympics and follows Tapan Das, 
        the man who won India its first gold medal in the same event. Gold was theatrically released on 15 August 2018 during India's Independence Day to universal critical acclaim.
         A major box office hit, the film grossed ₹158 crore (US$20 million) at the box office. Gold also became the first Bollywood film to be released in Saudi Arabia. It was also released in Chinese theatres on 13 December 2019."
      />
      <ShowToggle
        title="New & Upcoming"
        imageUrl="https://w0.peakpx.com/wallpaper/625/268/HD-wallpaper-x-men-days-of-future-past-banner-x-men-movies-banner.jpg"
        description="X-Men is a 2000 American superhero film depicts a world where an unknown proportion of people are mutants, whose possession of superhuman powers makes them distrusted by normal humans. 
        It focuses on mutants Wolverine and Rogue as they are brought into a conflict between two groups that have radically different approaches to bringing about the acceptance of mutant-kind: Charles Xavier's X-Men, and the Brotherhood of Mutants, led by Magneto."
      />
    </div>
  );
}

export default ShowsPage;
