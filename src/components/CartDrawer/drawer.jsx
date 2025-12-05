import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IconButton, Badge, Typography, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { useNavigate } from "react-router";
export default function CartDrawer() {
  // navigate shop page
  const navigate = useNavigate();
  const GoShoppingPage = () => {
    navigate("/shop");
    setOpen(false)
  };
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  return (
    <div>
      <IconButton
        onClick={toggleDrawer(true)}
        className="relative !text-black hover:!text-secondary -translate-x-1 "
      >
        <Badge badgeContent={1} color="error">
          {/* <ShoppingCartIcon /> */}
          <svg
            className="icon"
            stroke="currentColor"
            fill="none"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="0.9em"
            width="0.9em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={9} cy={21} r={1} />
            <circle cx={20} cy={21} r={1} />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </Badge>
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 280,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              py: 2,
              borderBottom: "1px solid #eee",
            }}
          >
            <Typography variant="h6" fontWeight={600}>
              Shopping Cart
            </Typography>
            <IconButton
              onClick={toggleDrawer(false)}
              className="group flex items-center justify-center relative z-10 [transition:all_0.5s_ease] rounded-[0.375rem] p-[5px] cursor-pointer border outline-none focus-visible:outline-0"
            >
              <CloseIcon className='!text-black hover:!text-secondary' />
            </IconButton>
          </Box>
          {/* Drawer Content */}
          <Box sx={{ flex: 1, p: 2 }} className="flex flex-col items-center">

            <div className="py-4 text-[1.1rem] title">
              <h1>Your cart is empty</h1>
            </div>
            <div className="mt-2 submit-btn">
              <Button
                onClick={GoShoppingPage}
                className="w-52 h-12 !bg-[#00C7B1] hover:!bg-[#00A08C] !text-white gap-1 !rounded-md !shadow-lg !transition-all !duration-300"
                variant="contained"
              >
                Continue Shopping
              </Button>
            </div>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
}
