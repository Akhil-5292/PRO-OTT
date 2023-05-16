import React, { useState,useEffect } from 'react';
import style from './Slider.module.css'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';


function Slider(){
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1614713529172-Y818CYNVMUAYLVZV2DZL/image-asset.jpeg',
    'https://pbs.twimg.com/media/FitrDXAUYAEAN7E.jpg',
    'https://musiccitydrivein.files.wordpress.com/2022/10/black-adam.jpg'
  ];
  const delay = 3000;

  useEffect(() => {
    const timer = setTimeout(() => {
      const lastIndex = images.length - 1;
      const shouldResetIndex = currentIndex === lastIndex;
      const index = shouldResetIndex ? 0 : currentIndex + 1;

      setCurrentIndex(index);
    }, delay);

    return () => clearTimeout(timer);
  }, [currentIndex, delay, images.length]);

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
    <div className={style.slider}>
     <button className={style.btn1} onClick={previousSlide}><ArrowCircleLeftIcon/></button>
      <img className={style.img} src={images[currentIndex]} alt="Slider Img" />
      <button className={style.btn2} onClick={nextSlide}><ArrowCircleRightIcon/></button>
    </div>
  );
};

export default Slider;
