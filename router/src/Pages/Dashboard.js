// import axios from 'axios'
// import React from 'react'
// import {Link} from 'react-router-dom'
// import {useState, useEffect} from 'react'
// // import App from '../App'
// import '../App.css'

// export default function Dashboard() {
//   return (
//     <div>
//     Welcome to dashboard
//     </div>
//   )
// }
import React from 'react'
import ButtonAppBar from "./AppBar";
import MediaCard from "./Card";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import '../App.css'
import { useState } from "react";

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light"
    }
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        {/* <ButtonAppBar check={darkMode} change={() => setDarkMode(!darkMode)} /> */}

        <MediaCard />
      </div>
    </ThemeProvider>
  );
}
