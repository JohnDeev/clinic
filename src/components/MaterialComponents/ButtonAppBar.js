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
    //frexGrow: 1,
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#2196f3' }}>
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            SISM
          </Typography>
          <div className={classes.toolbarButtons}>
            <Button color="inherit" >Quienes somos</Button>
            <Button color="inherit" >Misión y Visión</Button>
            <Button color="inherit" >Portafolio</Button>
            <Button color="inherit" >Contacto</Button></div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
