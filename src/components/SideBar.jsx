import { Drafts, Home } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import DarkModeIcon from '@mui/icons-material/DarkMode';
export const SideBar = () => {
  return (
    <Box flex={1} p={2}
    sx={{ display: { xs:"none" ,sm:"block" } }}>
      <Box position="fixed">
       <List>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                  <Home/>
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                  <Drafts/>
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                  <AutoAwesomeMotionIcon/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                  <AutoAwesomeMotionIcon/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                  <AutoAwesomeMotionIcon/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                  <DarkModeIcon/>
              </ListItemIcon>
               <Switch/>
            </ListItemButton>
          </ListItem>

        </List>
        </Box>
    </Box>
  )
}
