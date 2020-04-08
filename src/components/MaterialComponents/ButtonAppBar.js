import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';


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
  
  const handleUpdateClick =() =>{
    
  }
    return (
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
            
            <Button color="inherit" onClick={handleUpdateClick}>Inicio</Button>
            <Button color="inherit" >¿Quienes somos?</Button>
            <Button color="inherit" >Portafolio</Button>
            <Button color="inherit" >Contacto</Button>
            
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
