import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';

function Resource({resource}) {
  // const [resource, setResource] = useState([resource])

  return (
    <Box
      sx={{ m: 1, p: 2, border: '1px solid lightgrey' }}>
        <b>{ resource.title }</b> <br/>
        { resource.url } <br/>
        { resource.description } <br/>
    </Box> 
  )
}

export default Resource;