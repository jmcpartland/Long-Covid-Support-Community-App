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
import { UserContext } from "../context/user";
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import Post from './Post';


function AllPosts({post}) {
  const { user, loggedIn } = useContext(UserContext)
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/all-posts/${post.id}`)
  };

  const handleClick = (e) => {
    console.log(e)
  }

  const handleDelete = (e) => {
    console.log(e);
  };

  return (
    <Grid item xs={6}>
      <Card sx={{ minWidth: 300 }}>
      <CardActionArea onClick={handleCardClick} >
        <CardHeader
          avatar={ <Avatar sx={{ width: 32, height: 32 }}>{post.user.first_name.charAt(0).toUpperCase()}</Avatar> }
          // action={
          //   <IconButton aria-label="settings">
          //     <MoreVertIcon />
          //   </IconButton>
          // }
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
        </CardActionArea>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          {/* <IconButton aria-label="delete" onClick={handleClick}>
            <DeleteIcon />
          </IconButton> */}
        </CardActions>
      </Card>
    </Grid>
  );
}

export default AllPosts;