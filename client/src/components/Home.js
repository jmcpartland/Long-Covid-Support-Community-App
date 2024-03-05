import React, { useContext } from "react";
import { Box } from "@mui/material";
// import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { UserContext } from "../context/user";
import long_covid_image from "../images/long_covid_image.jpeg"

const Home = () => {
    const { user } = useContext(UserContext);

    return(
      <Box sx={{ margin: 2 }}>
        <img src={long_covid_image} width="100%" height="100%" alt="" />

          <Typography variant="h5" align="left">
              Welcome { user.first_name.charAt(0).toUpperCase() + user.first_name.slice(1) }
          </Typography>
          
          <Typography variant="h7" align="left" gutterBottom>
              Latest 
          </Typography>


      </Box>
    )
}

export default Home;