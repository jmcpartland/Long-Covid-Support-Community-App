import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Favorite({ post }) {
  const [ favorite, setFavorite ] = useState(false)

  // console.log(post.likes)

  const favoriteIcon = () => {
    if (favorite == false) {
      return <FavoriteBorderIcon sx={{ color: "red" }} />
    } else {
      return <FavoriteIcon sx={{ color: "red" }}/>
    }
  }

  const handleFavoriteClick = (e) => {
    console.log(post)
    setFavorite(!favorite)
  }

  return (
    <IconButton aria-label="add to favorites" onClick={handleFavoriteClick}>
      { favoriteIcon() }
    </IconButton>
  )
}

export default Favorite;