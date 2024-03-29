import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { UserContext } from '../context/user';
import PostCard from './PostCard'

function AllPostsList() {
    const {loggedIn} = useContext(UserContext)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('/all-posts')
        .then(res => res.json())
        .then(p => setPosts(p))
    }, [])

    const postListing = posts.map(p => <PostCard key={p.id} post={p} />)

    if (loggedIn) {
        return (
            <Box spacing={2} margin={2}>
              <h1>All Posts</h1>
              <Grid container spacing={4}>
                { postListing }
              </Grid>
            </Box>
        )
    } else {
      <div>
          <h3>You need to be logged in read posts</h3>
      </div>
    }
}

export default AllPostsList