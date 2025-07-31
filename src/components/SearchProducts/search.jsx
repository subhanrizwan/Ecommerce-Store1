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
  Opacity:0.1,
  border: "2px solid #000",
  boxShadow: 24,
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
        <SearchIcon />
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
                color:'#03ada4'
            }
         }}
         InputProps={{
            style:{
                color:'#03ada4'
            },
            disableUnderline: false,
    sx: {
      '&:before': {
        borderBottom: '1.5px solid #03ada4', // normal state
      },
      '&:hover:not(.Mui-disabled):before': {
        borderBottom: '1.5px solid #028b85', // hover state
      },
      '&:after': {
        borderBottom: '1.5px solid #03ada4', // focused state
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
