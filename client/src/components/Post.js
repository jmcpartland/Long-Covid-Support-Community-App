import React, { useContext } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { UserContext } from "../context/user";
import Box from '@mui/material/Box';
import { IconButton, Avatar, Button, Typography, Stack } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import Comments from './Comments';
import Favorite from './Favorite';

function Post() {
  const location = useLocation();
  const post = location.state.post;

  const { user, loggedIn } = useContext(UserContext);
  const params = useParams();
  const navigate = useNavigate()
  const timeFormatted = new Date(post.created_at).toDateString();

  const handleClick = (e) => {
    console.log(e)
  }

  const editButton = () => {
    if (post.user_id == user.id) {
      return (
        <>
          <Button onClick={handleEditButton} type="submit" variant="contained" size="small" sx={{ mt: 3, mb: 2 }} >Edit</Button>{" "}
          <Button type="submit" variant="contained" size="small" sx={{ mt: 3, mb: 2 }} >Delete</Button>
        </>
      )
    }
  }

  const handleEditButton = () => {
    navigate(`/posts/${post.id}/edit`)
  }

  return (
    <>
      <Box margin={2} justifyContent="center">

        <Stack direction="row" alignItems={'center'}>
          <Avatar sx={{ width: 32, height: 32, marginRight: 1, backgroundColor: 'primary.main' }}>
            {/* fix authentication issues  */}
            {post.user.first_name.charAt(0).toUpperCase()}
          </Avatar>

          <Stack direction="column" >
            <Typography sx={{ fontSize: 18, fontWeight: 'bold' }}>
              {/* fix authentication issues  */}
              {post.user.first_name}
            </Typography>
            <Typography sx={{ fontSize: 12, color: 'gray' }}>
              { timeFormatted }
            </Typography>
          </Stack>

        </Stack>

        <Stack direction="row" alignItems={'center'}>
          <Favorite />
          <IconButton aria-label="share" edge="start" onClick={handleClick}>
            <ShareIcon />
          </IconButton>
        </Stack>

        <Typography variant='h4' fontWeight={'bold'} borderBottom={2} borderColor={"primary.light"}>
          {post.title}
        </Typography>

            { editButton() }

        <br/>

        <Typography sx={{whiteSpace: 'pre-line'}}>
          { post.body }
        </Typography>
        {/* <Comments post={post}/> */}

      </Box>
    </>
  );
}

export default Post;