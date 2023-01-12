import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";
import { useParams, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from "@mui/system";

function PostForm() {
  const { user, loggedIn } = useContext(UserContext)
  const userInitial = user.first_name
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [editTitle, setEditTitle] = useState("")
  const [editBody, setEditBody] = useState("")
  const [errorsList, setErrorsList] = useState([])
  const params = useParams();
  const navigate = useNavigate()


  let fetchMethod = ""
  let URL = ""

  if (params.id) {
    fetch(`/posts/${params.id}`)
      .then(res => res.json())
      .then(post => {
        setEditTitle(post.title)
        setEditBody(post.body)
      })
    fetchMethod = "PATCH"
    URL = params.id
  } 
  else {
    fetchMethod = "POST"
    URL = ""
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`/posts/${URL}`, { 
      method: fetchMethod,
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
              defaultValue={editTitle}
              // value={title}
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
              defaultValue={editBody}
              // value={body}
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