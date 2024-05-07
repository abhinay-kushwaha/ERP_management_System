import styles from './Navigationn.module.css';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Modal from '@mui/material/Modal';
import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const Navigationn = ()=>{
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
      };
   return(
    <>
    <div className={${styles['nav']}}>
        <div className={${styles['imgP']}}>
        <img src="Shanti Infosoft Logo-03.png" alt="" />
        <p>Formerly known as Shanti Infotech</p>
        </div>
       <div className={${styles['remain']}}>
       <HelpOutlineIcon style={{color:"white"}}/>
        <p>Help</p>
        <p style={{ fontSize: '55px' }}>|</p>
        <img src="me.jpeg" alt=""  className={${styles['me']}}/>
        <p>Raghav</p>

        <div>
                                    <Button
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        <KeyboardArrowDownIcon style={{color:'white',marginRight:'d30px'}}/>
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
                                        <MenuItem>My Details</MenuItem>
                                        <MenuItem>Change Password</MenuItem>
                                        <MenuItem>Log Out</MenuItem>
                                    </Menu>
                                </div>
        </div>
    </div>

    

    </>
   );
}
export default Navigationn;