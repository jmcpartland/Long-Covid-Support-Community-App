import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';
import { UserContext } from "../context/user";
import { useNavigate } from 'react-router-dom';
import Favorite from './Favorite';
import PostCard from './PostCard'

function Posts({ post, updatePostsList }) {
  const { user, loggedIn } = useContext(UserContext)
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/posts/${post.id}`)
  };

  const handleShare = (e) => {
    console.log(e)
  }

  const handleDelete = (e) => {
    fetch(`posts/${post.id}`, {
      method: 'DELETE',
    })
    .then(() => updatePostsList(post))
  };

  // const postListing = posts.map(p => { 
  //   return (
  //     <Grid item xs={6} key={p.id}>
  //       <PostCard post={p} />
  //     </Grid>
  //   )
  // });

  return (
    // <Grid container rowSpacing={1} columnSpacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
    //   { postListing }
    // </Grid>



    <Grid item xs={6}>
      <Card sx={{ minWidth: 300 }}>
      <CardActionArea onClick={handleCardClick} >
        <CardHeader
          avatar={ <Avatar sx={{ width: 32, height: 32 }}>{post.user.first_name.charAt(0).toUpperCase()}</Avatar> }
          title={ post.title }
          subheader={ post.created_at }
        />
        </CardActionArea>
        <CardActions disableSpacing>

        <Favorite post={post}/>

          <IconButton aria-label="share" onClick={handleShare}>
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Posts;