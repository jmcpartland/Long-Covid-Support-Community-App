import React, { useState, useContext } from "react";
import TextField from '@mui/material/TextField';
// import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
// import FormControl from '@mui/material/FormControl';
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";

function PostForm() {
  const { user, loggedIn } = useContext(UserContext)
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [errorsList, setErrorsList] = useState([])
  const navigate = useNavigate()

  const userInitial = user.first_name
  // console.log(userInitial.charAt(0))

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("/posts", { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: title,
            body: body,
            user_initial: userInitial,
            })
    })
        .then(res => res.json())
        .then(p => {
            if(!p.errors) {
                setTitle("")
                setBody("")
                navigate('/posts')
            } else {
                const errorLis = p.errors.map(e => <h3>{e}</h3>)
                setErrorsList(errorLis)
            }
        })
    }


    if (loggedIn) {
      return (
        <Box
          // component="form"
          padding={1}
          sx={{
            '& .MuiTextField-root': { mb: 1, width: '120ch' },
          }}
          noValidate
          autoComplete="off"
        >
        <form onSubmit={handleSubmit}>
            <TextField 
              inputProps={{style: {fontSize: 40}}}
              label="Title"
              variant="filled"
              id="title"
              name="title"
              value={title}
              rows={1}
              onChange={(e) => setTitle(e.target.value)}
            />
          <br/>
            <TextField 
              multiline
              label="Post"
              variant="filled"
              id="body"
              name="body"
              value={body}
              rows={25}
              onChange={(e) => setBody(e.target.value)}
            />
          <br/>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
      </form>
        {errorsList}
    </Box>
  )
  } else {
    return (
      <div>
          <h3>You need to be logged in to add Posts</h3>
      </div>
    ) 
  }
}

export default PostForm;