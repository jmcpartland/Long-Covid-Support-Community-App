import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { UserContext } from "../context/user";
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import AddComment from './AddComment';

function AllPost() {
  const { user, loggedIn } = useContext(UserContext);
  const params = useParams();
  const [ post, setPost ] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`/all-posts/${params.id}`)
    .then(res => res.json())
    .then(data => setPost(data))
  }, [])

  const handleClick = (e) => {
    console.log(e)
  }

  return (
    <>
    <Box margin={2} justifyContent="center">
      <Card sx={{ padding: 2 }}>
        <Avatar sx={{ width: 32, height: 32 }}>{post.user_initial}</Avatar>
        <CardActions >
          <IconButton aria-label="add to favorites"  onClick={handleClick}>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share"  onClick={handleClick}>
            <ShareIcon />
          </IconButton>
        </CardActions>

        <h1>{ post.title }</h1>
        { post.body }
      </Card>

      <AddComment post={post}/>

    </Box>
    </>
  );
}

export default AllPost;