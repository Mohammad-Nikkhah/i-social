import { AppBar, Avatar, Badge, InputBase, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Box, styled } from '@mui/system';
import { Mail, Pets ,NotificationAdd } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
  display:'flex',
  justifyContent:"space-between",
});

const Search = styled('div')(( {theme}) => ({
     backgroundColor:"white",
     width:"40%",
     padding:"0 10px",
     borderRadius:theme.shape.borderRadius
}));
const Icons = styled(Box)(( {theme}) => ({
     display:"flex",
     alignItems:"center",
     gap:"20px"
}));

const Navbar = () => {
  return (
    <AppBar position='stic'>
      <StyledToolbar>
          <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}>
             I-social
          </Typography>
          <Pets sx={{display:{xs:"block",sm:"none"}}}/>
          <Search><InputBase placeholder='search ...'/></Search>
          <Icons>
              <Badge badgeContent={4} color='error'>
                  <Mail/>
              </Badge>
              <Badge badgeContent={2} color='error'>
                 <NotificationAdd/>
              </Badge>
              <Avatar sx={{width:"30px",height:"30px"}} src='https://avatars.githubusercontent.com/u/78091800?v=4'></Avatar>
          </Icons>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar