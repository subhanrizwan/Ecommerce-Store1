import * as React from "react";
import { useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import DraftsIcon from '@mui/icons-material/Drafts';
// import SendIcon from '@mui/icons-material/Send';
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
// import StarBorder from '@mui/icons-material/StarBorder';
import CategoryIcon from "@mui/icons-material/Category";

export default function NestedList() {
  const [open, setOpen] = useState(true);
  const [mens, setMens] = useState(false);

  const openSecond = () => {
    setMens(!mens);
  };
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      // bgcolor: 'background.paper'
      sx={{
        width: {
        //   xs: "100%",
          sm: "93%",
          lg: "80%",
          md: '90%',
        },
        // maxWidth: 360,
        backgroundColor: "transparent",
        borderRight: "1px solid lightgray",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      //   subheader={
      //     <ListSubheader component="div" id="nested-list-subheader">
      //                   <CategoryIcon />{" "}Categories
      //     </ListSubheader>
      //   }
    >
      <ListItemButton onClick={handleClick}>
        {/* <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon> */}
        <ListItemText primary="Women's Fashion" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            {/* <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon> */}
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={openSecond}>
        {/* <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon> */}
        <ListItemText primary="Women's Fashion" />
        {mens ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={mens} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            {/* <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon> */}
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton>
        {/* <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon> */}
        <ListItemText primary="Sent mail" />
      </ListItemButton>
      <ListItemButton>
        {/* <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon> */}
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton>
        {/* <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon> */}
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton>
        {/* <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon> */}
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton>
        {/* <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon> */}
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton>
        {/* <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon> */}
        <ListItemText primary="Drafts" />
      </ListItemButton>
    </List>
  );
}
