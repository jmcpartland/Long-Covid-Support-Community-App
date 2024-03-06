import React, { useContext, useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import Typography from '@mui/material/Typography';
import { UserContext } from "../context/user";
import long_covid_image from "../images/long_covid_image.jpeg"
import AllPosts from './AllPosts'

const Home = () => {
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState([])

  useEffect(() => {
      fetch('/all-posts')
      .then(res => res.json())
      .then(p => setPosts(p))
  }, [])

  const postListing = posts.map(p => { 
    return (
      <Grid item xs={6}>
        <AllPosts key={p.id} post={p} />
      </Grid>
      )
    })
    
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ marginTop: 2 }}>
          <img src={long_covid_image} width="100%" height="100%" alt="" />
          <Typography variant="h7" align="left">
              Latest Posts
          </Typography>
        </Box>

        {/* <Box sx={{ marginBottom: 2, marginTop: 2 }}> */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {/* <Grid columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}

              { postListing }
         
          </Grid>

        {/* </Box> */}
      </Box>
    )
}

export default Home;