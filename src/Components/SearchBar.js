import React from 'react';

function SearchBar() {
  return (
    <div>
      <input style={{border:'none', height:'20px'}} type="text" placeholder="Search..." />
      <button style={{backgroundColor:'#B799FF', height:'20px' ,border:'none',width:'55px'}}>Search</button>
    </div>
  );
}

export default SearchBar;