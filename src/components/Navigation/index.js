import {useState, useContext, useCallback} from "react";
import {Link as RouterLink} from "react-router-dom";
import {FormattedMessage} from "react-intl";
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
  Button,
  Link
} from "@mui/material";
import {Menu, Settings} from '@mui/icons-material';
import {AppContext} from '../../providers/appContext';
import {LOCALES} from '../../const';
import translate from '../../utils/translate';

const Navigation = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const {state, dispatch} = useContext(AppContext);

  const setLanguage = useCallback((locale) => {
    dispatch({
      type: 'setLocale',
      locale
    })
  }, []);

  const list = () => (
    <Box sx={{width: 250}} role="presentation">
      <List>
        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to="settings">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary={translate('Navigation.settings')} />
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
            <Link
              to="/"
              component={RouterLink}
              sx={{
                color: 'white',
                '&:hover': {
                  textDecoration: 'none'
                }
              }}
            >
              <FormattedMessage id="navigation.home" />
            </Link>
          </Typography>
          <Box>
            {state.locale}
            <Button
              disabled={state.locale === LOCALES.ENGLISH}
              sx={{my: 2, color: 'white'}}
              onClick={() => setLanguage(LOCALES.ENGLISH)}
            >
              ENGLISH
            </Button>
            <Button
              disabled={state.locale === LOCALES.UKRAINIAN}
              sx={{my: 2, color: 'white'}}
              onClick={() => setLanguage(LOCALES.UKRAINIAN)}
            >
              Українська
            </Button>
          </Box>
          <Box sx={{display: { xs: 'none', lg: 'flex' }}}>
            <Button
              component={RouterLink}
              to="settings"
              sx={{my: 2, color: 'white', display: 'block'}}
            >
              <FormattedMessage id="navigation.settings" />
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
