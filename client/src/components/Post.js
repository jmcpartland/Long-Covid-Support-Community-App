import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from "../context/user";
import Box from '@mui/material/Box';

function Post() {
  const { user, loggedIn } = useContext(UserContext);
  const { post } = useParams();


  return (
    <>
      <Box>
        {/* {post.title} */}
      </Box>
    </>
  );
}

export default Post;