import React from 'react'
import { ExpandMore } from '@mui/icons-material'
import { Avatar,  Card , CardContent, CardHeader, CardMedia , Typography } from '@mui/material'
const Post = () => {
  return (
    <Card sx={{ margin:"10px" }} >
    <CardHeader
      avatar={
        <Avatar src="https://avatars.githubusercontent.com/u/78091800?v=4" sx={{ bgcolor: 'red' }} aria-label="recipe">
        </Avatar>
      }
      title="Mohammad Nikkhah"
      subheader="Jan 09, 2023"
    />
    <CardMedia
      component="img"
      height="20%"
      image="https://coin-plus.org/wp-content/uploads/2021/07/ethereum-programming.jpg"
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
      Lorem ipsum dolor sit amet. Ut adipisci voluptas hic magni enim At fugit rerum. Et aspernatur voluptas qui corporis corrupti ut tenetur consequatur non aperiam facere qui asperiores magni ut voluptatem quia est culpa incidunt! 
      </Typography>
    </CardContent>


    </Card>
  )
}

export default Post