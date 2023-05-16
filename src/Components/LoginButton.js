import React, { useState } from 'react';

function LoginButton() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <button onClick={togglePopup}>Login</button>
      {showPopup && (
        <div className="popup">
          {/* Login form or login component */}
          
        </div>
      )}
    </div>
  );
}

export default LoginButton;
