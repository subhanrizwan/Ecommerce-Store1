import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IconButton, Badge, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';

export default function CartDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)} className="relative !text-black hover:!text-secondary -translate-x-1 ">
        <Badge  badgeContent={1} color="error" >
          {/* <ShoppingCartIcon /> */}
           <svg className="icon" stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="0.9em" width="0.9em" xmlns="http://www.w3.org/2000/svg">
        <circle cx={9} cy={21} r={1} />
        <circle cx={20} cy={21} r={1} />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
        </Badge>
      </IconButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <Box sx={{ width: 250, display: 'flex', flexDirection: 'column', height: '100%' }}>
          {/* Header */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: 2,
              py: 2,
              borderBottom: '1px solid #eee',
            }}
          >
            <Typography variant="h6" fontWeight={600}>
              Shopping Cart
            </Typography>
            <IconButton onClick={toggleDrawer(false)}
             className="group  flex items-center justify-center relative z-10 [transition:all_0.5s_ease] rounded-[0.375rem] p-[5px] cursor-pointer border outline-none focus-visible:outline-0" >
              {/* <CloseIcon className='!text-black hover:!text-secondary' /> */}
                <svg fill="currentColor" stroke="none" strokeWidth={0} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-[0.9em] h-[0.9em] group-hover:fill-secondary overflow-visible [transition:transform_.35s_ease] group-hover:[transition-delay:.25s] [&_path]:[transition:transform_.35s_ease] group-hover:rotate-45">
        <path className="group-hover:[transform:rotate(112.5deg)_translate(-27.2%,-80.2%)] " d="m3.45,8.83c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31L14.71,2.08c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31L3.84,8.75c-.13.05-.25.08-.38.08Z" />
        <path className="group-hover:[transform:rotate(22.5deg)_translate(15.5%,-23%)]" d="m2.02,17.13c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31L21.6,6.94c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31L2.4,17.06c-.13.05-.25.08-.38.08Z" />
        <path className="group-hover:[transform:rotate(112.5deg)_translate(-15%,-149.5%)]" d="m8.91,21.99c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31l11.64-4.82c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31l-11.64,4.82c-.13.05-.25.08-.38.08Z" />
      </svg>
            </IconButton>
          </Box>
          {/* Drawer Content */}
          <Box sx={{ flex: 1, p: 2 }}>
            {/* Cart items/content will go here */}
          </Box>
        </Box>
      </Drawer>
    </div>
  );
}
