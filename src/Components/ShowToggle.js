import React, { useState } from 'react';

function ShowToggle({ title, imageUrl, description }) {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div>
      <button onClick={toggleDescription}>
        <img src={imageUrl} alt={title} />
      </button>
      {showDescription && <p>{description}</p>}
    </div>
  );
}

export default ShowToggle;