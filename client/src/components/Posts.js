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
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import { UserContext } from "../context/user";
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import Chip from '@mui/material/Chip';


function Posts({post}) {
  const { user, loggedIn } = useContext(UserContext)

  const userInitial = user.first_name.charAt(0).toUpperCase()
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/posts/${post.id}`)
  };

  const handleClick = (e) => {
    console.log(e)
  }

  const handleDelete = () => {
    console.log('You clicked the delete icon.');
  };

  return (
    <Grid item xs={6}>
      <Card sx={{ minWidth: 400, maxWidth: 500 }}>
      <CardActionArea onClick={handleCardClick} >
        <CardHeader
          avatar={
            <Avatar sx={{ width: 32, height: 32 }}>{post.user_initial}</Avatar>
          }
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
          <IconButton aria-label="delete">
            <DeleteIcon onClick={handleClick} />
          </IconButton>
        </CardActions>
        
        {/* <Chip
          label="Delete"
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<DeleteIcon />}
          variant="outlined"
        /> */}

      </Card>
    </Grid>
  );
}

export default Posts;