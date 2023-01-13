import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box flex={2} p={2}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100}>
          Online Users
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="mohammadNikkah" src="https://avatars.githubusercontent.com/u/78091800?v=4" />
          <Avatar alt="mohammadNikkah" src="https://avatars.githubusercontent.com/u/78091800?v=4" />
          <Avatar alt="mohammadNikkah" src="https://avatars.githubusercontent.com/u/78091800?v=4" />
          <Avatar alt="mohammadNikkah" src="https://avatars.githubusercontent.com/u/78091800?v=4" />
          <Avatar alt="mohammadNikkah" src="https://avatars.githubusercontent.com/u/78091800?v=4" />
          <Avatar alt="mohammadNikkah" src="https://avatars.githubusercontent.com/u/78091800?v=4" />
          <Avatar alt="mohammadNikkah" src="https://avatars.githubusercontent.com/u/78091800?v=4" />
          <Avatar alt="mohammadNikkah" src="https://avatars.githubusercontent.com/u/78091800?v=4" />
          <Avatar alt="mohammadNikkah" src="https://avatars.githubusercontent.com/u/78091800?v=4" />
          <Avatar alt="mohammadNikkah" src="https://avatars.githubusercontent.com/u/78091800?v=4" />
          <Avatar alt="mohammadNikkah" src="https://avatars.githubusercontent.com/u/78091800?v=4" />
          <Avatar alt="mohammadNikkah" src="https://avatars.githubusercontent.com/u/78091800?v=4" />
          <Avatar alt="mohammadNikkah" src="https://avatars.githubusercontent.com/u/78091800?v=4" />
          <Avatar alt="mohammadNikkah" src="https://avatars.githubusercontent.com/u/78091800?v=4" />
        </AvatarGroup>
      </Box>
    </Box>
  );
};

export default RightBar;
