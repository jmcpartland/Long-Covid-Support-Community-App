import React, { useContext, useEffect, useState } from 'react';
import { Container } from "@mui/system";
import Grid from '@mui/material/Grid';
import { UserContext } from '../context/user';
import Post from '../components/Post'

function Posts() {
    const {loggedIn} = useContext(UserContext)
    const [posts, setPosts] = useState([])

    useEffect(() => { 
        fetch('/posts')
        .then(res => res.json())
        .then(data => {
            setPosts(data)
            console.log(data)
        })
    }, [])

    const postList = posts.map(p => <Post key={p.id} post={p} />)

    if (loggedIn) {
        return (
          <Container>
            <Grid container spacing={2} marginBottom={4} >
              {postList}
            </Grid>
          </Container>
        )
    } else {
      <div>
          <h3>You need to be logged in read posts</h3>
      </div>
    }
}

export default Posts