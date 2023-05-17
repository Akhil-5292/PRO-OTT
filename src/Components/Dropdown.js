import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { MenuItem } from '@mui/material';
import '../App.css'

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{height:'20px', color:'#551a8b'}}
      >
        Shows
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        // style={{display:'flex', flexDirection:'column',width:'500px', height:'800px',padding:'25px',justifyContent:'center', alignItems:'center'}}
      >
       
        <Link style={{display:'flex', flexDirection:'column',width:'15vw', height:'7vh',justifyContent:'center', alignItems:'center'}} to='/recommended'>Recommended for you</Link>
        <Link style={{display:'flex', flexDirection:'column',width:'15vw', height:'7vh',justifyContent:'center', alignItems:'center'}}  to='/animated'>Animated Adventures</Link>
        <Link style={{display:'flex', flexDirection:'column',width:'15vw', height:'7vh',justifyContent:'center', alignItems:'center'}}  to='/popularShows'>Popular Shows/Drama</Link>
        <Link style={{display:'flex', flexDirection:'column',width:'15vw', height:'7vh',justifyContent:'center', alignItems:'center'}}  to='/new&upcoming'>New & Upcoming</Link>
      </Menu>
    </div>
  );
}