import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "10%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "20%",
  // background: "rgba(255, 255, 255, 0.8);",
  background: "rgb(255, 255, 255);",
  border: "2px solid #000",
  boxShadow: 24,
  transition: "background 0.3s ease-in-out",
  p: 4,
};

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton
        className="!text-black hover:!text-secondary"
        onClick={handleOpen}
      >
      {/* <svg
     className="icon"
     stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
          height="0.9em"
          width="0.9em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      stroke-linejoin="round"
      stroke-linecap="round"
    ></path>
  </svg> */}
        <svg
          className="icon"
          stroke="currentColor"
          fill="none"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          aria-hidden="true"
          height="0.9em"
          width="0.9em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            // d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        {/* <SearchIcon /> */}
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-around items-center">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              
            </Typography>
              <TextField
              id="standard-basic"
              label="How can we help you?"
              className="w-2/5"
              variant="outlined"
              InputLabelProps={{
                style: {
                  color: "gray",
                },
              }}
              InputProps={{
                style: {
                  color: "#03ada4",
                },
                disableUnderline: false,
                
              }}
            />
            <IconButton
              onClick={handleClose}
              className="!text-black hover:!text-secondary group flex items-center justify-center relative z-10 [transition:all_0.5s_ease] rounded-[0.375rem] p-[5px] cursor-pointer border outline-none focus-visible:outline-0"
            >
             
              <CloseIcon />
            </IconButton>
          </div>
          <div className="mt-4 h-[70%] flex justify-center items-center">
            {/* <TextField
              id="standard-basic"
              label="Search..."
              className="w-2/5"
              variant="standard"
              InputLabelProps={{
                style: {
                  color: "gray",
                },
              }}
              InputProps={{
                style: {
                  color: "#03ada4",
                },
                disableUnderline: false,
                sx: {
                  "&:before": {
                    borderBottom: "1.5px solid #03ada4",
                  },
                  "&:hover:not(.Mui-disabled):before": {
                    borderBottom: "1.5px solid #028b85",
                  },
                  "&:after": {
                    borderBottom: "1.5px solid #03ada4",
                  },
                },
              }}
            /> */}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
