import React, { useState } from 'react';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-36703721.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwVelFeA98r3p4kfZE9460rHg9775Ivn3LVZP4gRHml-sTnOl3bzFB6DLW3XVvGao2sRs&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzulvN2tDOPfarXt1wwOUQTKttqi1djxQMyXHd3Bo6bgEkYAhG_Fsh07bQFIMwInrz4Aw&usqp=CAU'
  ];

  const previousSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;

    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;

    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      <button onClick={previousSlide}>Previous</button>
      <img src={images[currentIndex]} alt="Slider img" />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slider;
