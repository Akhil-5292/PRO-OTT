import React, { useState } from 'react';

function LoginButton() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <button style={{backgroundColor:'#B799FF', height:'20px' ,border:'none',width:'55px'}} onClick={togglePopup}>Login</button>
      {showPopup && (
        <div className="popup" style={{backgroundColor:'#FFABAB',width:'100vw',height:'93vh',position:'absolute', top:'6.9%', right:'0'}}>
         <form style={{position:'absolute', top:'40%', right:'50%', display:'flex', flexDirection:'column'}}>
         <label for="uname"><b>Username</b></label>
         <input type="text" placeholder="Enter Username" name="uname" required/>

         <label for="psw"><b>Password</b></label>
         <input type="password" placeholder="Enter Password" name="psw" required/>

    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label>
         </form>
        </div>
      )}
    </div>
  );
}

export default LoginButton;
