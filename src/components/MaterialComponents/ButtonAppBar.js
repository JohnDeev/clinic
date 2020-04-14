import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// eslint-disable-next-line
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
// eslint-disable-next-line
import AccountCircle from '@material-ui/icons/AccountCircle';
// eslint-disable-next-line
import MailIcon from '@material-ui/icons/Mail';
// eslint-disable-next-line
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import './styles.css'
import ContComponent from './../PageComponent/ContComponent';

const useStyles = makeStyles((theme) => ({
  toolbarColor:{
    background: '#2196f3',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]:{
      display: 'none',
    },
  },
  title: {
    display: 'block',
    /* [theme.breakpoints.up('sm')]: {
      display: 'block',
    }, */
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function ButtonApBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // eslint-disable-next-line
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Router>
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link to="/" className="enlaceMenu">
        <MenuItem onClick={ContComponent()}>
          <p>Inicio</p>
        </MenuItem>
      </Link>
      <Link to="/quienessomos" className="enlaceMenu">
        <MenuItem onClick={ContComponent()}>
          <p>¿Quienes somos?</p>
        </MenuItem>
      </Link>
      <Link to="/portafolio" className="enlaceMenu">
        <MenuItem onClick={ContComponent()}>
          <p>Portafolio</p>
        </MenuItem>
      </Link>
      <Link to="/contacto" className="enlaceMenu">
        <MenuItem onClick={ContComponent()}>
          <p>Contacto</p>
        </MenuItem>
      </Link>
      
    </Menu>
    </Router>
  );

  return (
    <Router>
    <div className={classes.grow}>
      <AppBar position="static" className={classes.toolbarColor}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleMobileMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            SISM
          </Typography>
          
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to="/" className="enlaceMenu"><Button color="inherit" onClick={ContComponent()}>Inicio</Button></Link> 
            <Link to="/quienessomos" className="enlaceMenu"><Button color="inherit" onClick={ContComponent()}>¿Quienes somos?</Button></Link>
            <Link to="/portafolio" className="enlaceMenu"><Button color="inherit" onClick={ContComponent()}>Portafolio</Button></Link>
            <Link to="/contacto" className="enlaceMenu"><Button color="inherit" onClick={ContComponent()}>Contacto</Button></Link>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
    </Router>
  );
}
