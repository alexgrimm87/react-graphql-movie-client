import {useState} from "react";
import {Menu, MenuItem, IconButton} from '@mui/material';
import {MoreVert} from '@mui/icons-material';

const CardMenu = ({onAddClick}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        sx={{position: "absolute", right: 5, top: 5, background: 'rgba(255, 255, 255, .3)'}}
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        aria-haspopup="true"
      >
        <MoreVert />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button'
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          style: {
            width: '20ch'
          }
        }}
      >
        <MenuItem onClick={onAddClick}>
          Select
        </MenuItem>
      </Menu>
    </>
  )
}

export default CardMenu;
