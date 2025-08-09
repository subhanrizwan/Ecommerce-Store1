import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { data } from "react-router";

export default function Tabsproduct() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: "background.secondary" }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        
        aria-label="scrollable auto tabs example"
      >
        {["Headphones", "Mobiles", "Desktops", "Gaming", "Watches"].map(
          (label, index) => (
            <Tab
              key={index}
              label={label}
              className={`${
                value === index
                  ? "!text-secondary before:border-b border-b-secondary font-semibold"
                  : "!text-black font-normal"
              }`}
            />
          )
        )}
      </Tabs>
    </Box>
  );
}
