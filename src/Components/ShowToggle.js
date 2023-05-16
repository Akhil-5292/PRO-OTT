import React, { useState } from 'react';
import style from './Shows/ShowPage.module.css'

function ShowToggle({ title, imageUrl, description }) {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div>
      <button onClick={toggleDescription}>
        <img className={style.image} src={imageUrl} alt={title} />
      </button>
      {showDescription && <p>{description}</p>}
    </div>
  );
}

export default ShowToggle;