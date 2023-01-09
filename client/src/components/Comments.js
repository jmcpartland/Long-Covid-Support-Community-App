import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from 'react-router-dom';
import Comment from "./Comment"

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

  
  const commentsList = comments.map(c => <p> {c.comment_text} </p>)
  
  return (
    <div>
      {commentsList}
    </div> 
  )

}

export default Comments