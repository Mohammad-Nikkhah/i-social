import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

export const Feedd = () => {
  return (
    <Box flex={4} p={2}>
      <Post />
      <Post />
    </Box>
  );
};
