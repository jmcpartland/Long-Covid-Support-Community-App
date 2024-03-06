import React, { useContext } from 'react';
import { 
      Avatar,
      Card, 
      CardContent, 
      CardActionArea, 
      CardActions, 
      CardHeader,
      IconButton,
      Typography
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import { UserContext } from "../context/user";
import { useNavigate } from 'react-router-dom';
import Favorite from './Favorite';

function PostCard({ post }) {
  const { user, loggedIn } = useContext(UserContext)
  const navigate = useNavigate()
  const timeFormatted = new Date(post.created_at).toDateString();

  // console.log(timeFormatted)

  const handleCardClick = () => {
    navigate(`/all-posts/${post.id}`)
  };

  return (
    <>
      <Card sx={{ minHeight: 200 }}>
        <CardContent>
          <CardActionArea onClick={handleCardClick} >
            <CardHeader
              avatar={
                <Avatar sx={{ width: 32, height: 32 }}>
                  {post.user.first_name.charAt(0).toUpperCase()}
                </Avatar> 
              }
              titleTypographyProps={{fontSize:'16px', fontWeight:'bold' }}
              title={ post.title }
              subheader={ timeFormatted }
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

export default PostCard;