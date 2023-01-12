import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from 'react-router-dom';
import { Box } from "@mui/system";

function Comments() {
  const [comments, setComments] = useState([])
  
  const params = useParams();

  useEffect(() => {
    fetch(`/posts/${params.id}/comments`)
    .then(res => res.json())
    .then(data => {
      // console.log(data)
        setComments(data)
    })
  },[])

  
  const commentsList = comments.map(c => <p key={c.id}> {c.comment_text} </p>)
  
  return (
    <Box
      sx={{ p: 2, border: '1px solid grey' }}>
      {commentsList}
    </Box> 
  )

}

export default Comments