import React, { useContext, useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import Typography from '@mui/material/Typography';
// import { UserContext } from "../context/user";
import long_covid_image from "../images/long_covid_image.jpeg"
import PostCard from './PostCard'

const Home = () => {
  // const { user } = useContext(UserContext);
  const [posts, setPosts] = useState([])

  useEffect(() => {
      fetch('/all-posts')
      .then(res => res.json())
      .then(p => setPosts(p))
  }, [])

  const postListing = posts.map(p => { 
    return (
      <Grid item xs={6} key={p.id}>
        <PostCard post={p} />
      </Grid>
      )
    })
    
    return (
      <Box>
        <Box sx={{ marginTop: 2, marginBottom: 2 }}>
          <img src={long_covid_image} width="100%" height="100%" alt="" />
          <Typography variant="h7" align="left">
              Latest Posts
          </Typography>
        </Box>
        <Grid container rowSpacing={1} columnSpacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
          { postListing }
        </Grid>
      </Box>
    )
}

export default Home;