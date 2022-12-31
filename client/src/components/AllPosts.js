import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { UserContext } from '../context/user';
import Post from '../components/Post'

function AllPosts() {
    const {loggedIn} = useContext(UserContext)
    const [posts, setPosts] = useState([])

    useEffect(() => { 
        fetch('/all-posts')
        .then(res => res.json())
        .then(data => {
            setPosts(data)
        })
    }, [])

    const postList = posts.map(p => <Post key={p.id} post={p} />)

    if (loggedIn) {
        return (
            <Box spacing={2} margin={2}>
              <Grid container spacing={4}>
                {postList}
              </Grid>
            </Box>
        )
    } else {
      <div>
          <h3>You need to be logged in read posts</h3>
      </div>
    }
}

export default AllPosts