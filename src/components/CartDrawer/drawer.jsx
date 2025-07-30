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
      <IconButton className="relative !text-black hover:!text-secondary">
        <Badge onClick={toggleDrawer(true)} badgeContent={0} color="error" className="text-xs">
          <ShoppingCartIcon />
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
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
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
