import React from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import niagra from '../images/Niagra-Falls2.jpeg';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

function Post({post}) {

  return (
      <Grid item xs={4}>
          <Card>
            <img className="img" src={niagra} alt="Niagra Falls" />
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: green[300] }} aria-label="recipe">
                  J
                </Avatar>
              }
              title={post.title}
              subheader={post.created_at}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {post.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.body}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
      </Grid>
  )
}

export default Post