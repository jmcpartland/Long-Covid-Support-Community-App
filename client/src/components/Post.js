import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import niagra from '../images/Niagra-Falls2.jpeg';
import { UserContext } from "../context/user";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


function Post({post}) {
  const [expanded, setExpanded] = React.useState(false);
  const { user, loggedIn } = useContext(UserContext)
  const userInitial = user.first_name.charAt(0).toUpperCase()

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs={6}>
      <Card sx={{ minWidth: 400, maxWidth: 500 }}>
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
        <CardMedia
          component="img"
          height="194"
          image={niagra}
          alt="Niagra Falls"
        />
        <CardContent>
          <Typography variant="body" color="text.secondary">
            { post.body }
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
              aside for 10 minutes.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}

export default Post;