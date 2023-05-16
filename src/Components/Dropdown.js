import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


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
      >
        <MenuItem onClick={handleClose}>Recommended for you</MenuItem>
        <MenuItem onClick={handleClose}>Animated Adventures</MenuItem>
        <MenuItem onClick={handleClose}>Popular Shows/Drama</MenuItem>
        <MenuItem onClick={handleClose}>New & Upcoming</MenuItem>
      </Menu>
    </div>
  );
}