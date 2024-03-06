import React, { useContext } from 'react';
import { Box, Card, CardContent, CardActionArea, CardActions, CardHeader, Typography} from '@mui/material';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import { UserContext } from "../context/user";
import { useNavigate } from 'react-router-dom';
// import Post from './Post';
import Favorite from './Favorite';

function AllPosts({ post }) {
  const { user, loggedIn } = useContext(UserContext)
  const navigate = useNavigate()

  // console.log(post.likes)

  const handleCardClick = () => {
    navigate(`/all-posts/${post.id}`)
  };

  return (
    <>
      <Card sx={{ minHeight: 250 }}>
        <CardContent>
          <CardActionArea onClick={handleCardClick} >
            <CardHeader
              avatar={
                <Avatar sx={{ width: 32, height: 32 }}>
                  {post.user.first_name.charAt(0).toUpperCase()}
                </Avatar> 
              }
              title={ post.title }
              subheader={ post.created_at }
            />
            <Typography variant="body2" marginLeft={8}>
              {post.body.split(/(?=\s)/gi).slice(0, 20).join('')} ...
            </Typography>

          </CardActionArea>

          <CardActions >
            <Favorite post={post}/>
            <IconButton aria-label="share">
            <ShareIcon />
            </IconButton>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
}

export default AllPosts;