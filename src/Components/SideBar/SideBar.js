import React from 'react';
import style from './SideBar.module.css'

const SideBar = () => {
  return (
    <div className={style.sidebar}>
      <ul>
        <li>Channels</li>
        <li>Languages</li>
        <li>Genres</li>
      </ul>
    </div>
  );
};

export default SideBar;
