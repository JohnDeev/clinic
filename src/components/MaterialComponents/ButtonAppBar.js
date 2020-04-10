import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import ContComponent from './../PageComponent/ContComponent';
import './styles.css';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbarButtons:{
    marginLeft: 'auto',
  },
  toolbarColor:{
    background: '#2196f3',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  
    return (
      <Router>
    <div className={classes.root}>
      <AppBar position="static" className={classes.toolbarColor}>
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            SISM
          </Typography>
          <div className={classes.toolbarButtons}>
            
            <Link to="/" className="enlaceMenu"><Button color="inherit" onClick={ContComponent()}>Inicio</Button></Link> 
            <Link to="/quienessomos" className="enlaceMenu"><Button color="inherit" onClick={ContComponent()}>¿Quienes somos?</Button></Link>
            <Link to="/portafolio" className="enlaceMenu"><Button color="inherit" onClick={ContComponent()}>Portafolio</Button></Link>
            <Link to="/contacto" className="enlaceMenu"><Button color="inherit" onClick={ContComponent()}>Contacto</Button></Link>

            </div>
        </Toolbar>
      </AppBar>
    </div>
    </Router>
  );
}
