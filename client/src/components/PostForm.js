import React, { useState, useContext } from "react";
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";

function PostForm() {
  const { loggedIn } = useContext(UserContext)
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [errorsList, setErrorsList] = useState([])
  const navigate = useNavigate()

  const handleSubmit = (e) => {
      e.preventDefault()

      fetch("/posts", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              title: title,
              body: body,
              })
      })
          .then(res => res.json())
          .then(p => {
              if(!p.errors) {
                  setTitle("")
                  setBody("")
                  navigate('/')
              } else {
                  const errorLis = p.errors.map(e => <h3>{e}</h3>)
                  setErrorsList(errorLis)
              }
          })
      }

      if (loggedIn) {
        return (
          <Container maxWidth="md">
          <form onSubmit={handleSubmit}>
          <Grid container alignItems="left" justify="left" direction="column">
            <Grid item>
              <TextField 
                label="Title"
                id="title"
                name="title"
                value={title}
                rows={25}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
            <br/>
            <Grid item>
              <TextField 
                // fullWidth 
                multiline
                label="Post"
                id="body"
                name="body"
                value={body}
                rows={25}
                onChange={(e) => setBody(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" type="submit">
          Submit
          </Button>
        </form>
          {errorsList}
      </Container>
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