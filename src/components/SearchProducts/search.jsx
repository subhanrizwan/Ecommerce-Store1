import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  background: "rgba(255, 255, 255, 0.8);",
  border: "2px solid #000",
  boxShadow: 24,
  transition:'background 0.3s ease-in-out',
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
         <svg className="icon" stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true" height="0.9em" width="0.9em" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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
            <div className="flex justify-between items-center">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <IconButton onClick={handleClose} className="!text-black hover:!text-secondary">
              <CloseIcon />
            </IconButton>

            </div>
            <div className="mt-4 h-[70%] flex justify-center items-center">
         <TextField id="standard-basic" label="Search..." className="w-2/5" variant="standard"
         InputLabelProps={{
            style:{
                color:'gray'
            }
         }}
         InputProps={{
            style:{
                color:'#03ada4'
            },
            disableUnderline: false,
    sx: {
      '&:before': {
        borderBottom: '1.5px solid #03ada4', 
      },
      '&:hover:not(.Mui-disabled):before': {
        borderBottom: '1.5px solid #028b85', 
      },
      '&:after': {
        borderBottom: '1.5px solid #03ada4', 
      },
    }

         }}

         />
            </div>
          
        </Box>
      </Modal>
    </div>
  );
}
