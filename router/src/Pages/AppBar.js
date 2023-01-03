import * as React from "react";
import '../App.css'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import { RxDashboard } from "react-icons/rx";
const label = { inputProps: { "area-label": "switch demo" } };

export default function ButtonAppBar({ change, check }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography className="dash">
            <RxDashboard />
          </Typography>
          <Typography>My DashBoard</Typography>
          <Switch
            {...label}
            defaultChecked
            color="default"
            onChange={change}
            checked={check}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
