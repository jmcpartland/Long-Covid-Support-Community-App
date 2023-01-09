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
import Comments from './Comments';

function Post() {
  const { user, loggedIn } = useContext(UserContext);
  const [ author, setAuthor ] = useState([])
  const [ post, setPost ] = useState([])
  const params = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`/all-posts/${params.id}`)
    .then(res => res.json())
    .then(data => {
      setPost(data)
      setAuthor(data.user)
    })
  }, [])

  const handleClick = (e) => {
    console.log(e)
  }

  const handleEditButton = () => {
    if (post.user_id == user.id) {
      return (
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }} >Edit</Button>
      )
    }
  }

  return (
    <>
    <Box margin={2} justifyContent="center">
      <Card sx={{ padding: 2 }}>
        <Avatar sx={{ width: 32, height: 32 }}>
          {post.user_initial}
        </Avatar>

          { author.email }

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={handleClick}>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share" onClick={handleClick}>
            <ShareIcon />
          </IconButton>
        </CardActions>

        <h1>{ post.title }</h1>
        {handleEditButton()}
        <br/>
        { post.body }
      </Card>

      <AddComment post={post}/>
      <Comments />
      
    </Box>
    </>
  );
}

export default Post;