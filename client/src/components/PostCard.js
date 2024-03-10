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
// import { UserContext } from "../context/user";
import { useNavigate } from 'react-router-dom';
import Favorite from './Favorite';

function PostCard({ post }) {
  // const { user, loggedIn } = useContext(UserContext)
  const navigate = useNavigate()
  const timeFormatted = new Date(post.created_at).toDateString();

  // console.log(timeFormatted)

  const handleCardClick = () => {
    navigate(`/all-posts/${post.id}`, {state: { post }});
  };

  return (
    <>
      <Card sx={{ minHeight: 200 }}>
        <CardContent>
          <CardActionArea onClick={handleCardClick} >


            <CardHeader sx={{ paddingBottom: 1 }}
              avatar={
                <Avatar sx={{ width: 32, height: 32, backgroundColor: 'primary.main' }}>
                  {post.user.first_name.charAt(0).toUpperCase()}
                </Avatar> 
              }
              // disableTypography={true}
              titleTypographyProps={{fontSize:'14px', fontWeight:'bold' }}
              title={ post.user.first_name }
              subheader={ timeFormatted }
            />
            <Typography sx={{ fontSize: 17, fontWeight: 'bold', marginLeft: 8 }}>
                {post.title}
            </Typography>

            <Typography variant="body2" marginLeft={8}>
              {post.body.split(/(?=\s)/gi).slice(0, 20).join('')} ...
            </Typography>
          </CardActionArea>

          <CardActions >
            <Favorite post={post}/>
            {/* <IconButton aria-label="share">
              <ShareIcon />
            </IconButton> */}
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
}

export default PostCard;