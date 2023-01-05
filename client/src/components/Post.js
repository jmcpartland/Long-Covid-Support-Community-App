import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { UserContext } from "../context/user";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import AddComment from './AddComment';

function Post() {
  // const { user, loggedIn } = useContext(UserContext);
  const params = useParams();
  const [ post, setPost ] = useState([])

  useEffect(() => {
    fetch(`/all-posts/${params.id}`)
    .then(res => res.json())
    .then(data => setPost(data))
  }, [])

  return (
    <>
    <Box margin={2} justifyContent="center">
      <Card sx={{ minWidth: 600, maxWidth: 600, padding: 4 }}>
        <h1>{ post.title }</h1>
        <br/>
        { post.body }
      </Card>

      <AddComment post={post}/>

    </Box>
    </>
  );
}

export default Post;