import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { UserContext } from "../context/user";
import { useNavigate } from 'react-router-dom';
import Post from './Post';


function Posts({post}) {
  const { user, loggedIn } = useContext(UserContext)
  const userInitial = user.first_name.charAt(0).toUpperCase()
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/posts/${post.id}`)
    // return (<Post post={post} />)
  };



  return (
    <Grid item xs={6}>
      <Card sx={{ minWidth: 400, maxWidth: 500 }}>
      <CardActionArea onClick={handleCardClick} >
        <CardHeader
          avatar={
            <Avatar sx={{ width: 32, height: 32 }}>{userInitial}</Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={ post.title }
          subheader={ post.created_at }
        />
        {/* <CardMedia
          component="img"
          height="15%"
          width="15%"
          image={niagra}
          alt="Niagra Falls"
        /> */}
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>

        </CardActionArea>

      </Card>
    </Grid>
  );
}

export default Posts;