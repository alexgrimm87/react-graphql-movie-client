import {useState} from "react";
import {
  Drawer,
  ListItemIcon,
  ListItemText,
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  Button
} from "@mui/material";
import {Menu, Settings} from '@mui/icons-material';

const Navigation = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const list = () => (
    <Box sx={{width: 250}} role="presentation">
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={() => setDrawerOpen(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{mr: 2, display: {lg: 'none', xs: 'block'}}}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            Movie recommendations
          </Typography>
          <Box sx={{display: { xs: 'none', lg: 'flex' }}}>
            <Button sx={{my: 2, color: 'white', display: 'block'}}>
              Settings
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {list()}
      </Drawer>
    </Box>
  );
}

export default Navigation;
