import React, { useState, useEffect, useContext } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";


function AddComment({post}) {
  const { loggedIn } = useContext(UserContext)
  const [commentText, setCommentText] = useState([])

  useEffect(() => {
    fetch(`\posts\${post.id}\comments`)
    .then(res => res.json())
    .then(data => {
        setCommentText(data)
    })
  },[])


  const handleSubmit = (e) => {
      e.preventDefault()
      console.log(commentText)
  }


  if (loggedIn) {
    return (
      <Box
        padding={1}
        sx={{'& .MuiTextField-root': { mb: 1, width: '50ch' }}}
        noValidate
        autoComplete="off"
      >
      <h2>Comments</h2>
      <form onSubmit={handleSubmit}>
        <TextField 
          multiline
          label="Comment"
          variant="filled"
          id="Comment"
          name="comment"
          // value={commentText}
          maxRows={6}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <br/>
        <Button variant="contained" color="primary" type="submit" size="small">
          Submit
        </Button>
      </form>
        <Box>

        </Box>
      </Box>
    )
  } else {
    return (
      <div>
        <h3>You need to be logged in to add Comments</h3>
      </div>
    ) 
  }
};

export default AddComment;