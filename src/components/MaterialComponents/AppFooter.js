import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import logoSism from './../../img/logosismcompleto2015.png';
import './styles.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#c4c4c4',
  },
  container: {
    padding: 20,
  },
  iconsWrapper: {
    //height: 20,
    float: "center",
  },
  icons: {
    display: 'inline-flex',
  },
  logo: {
    width: 245,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing(1),

  },

  iconfb: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing(1),
    fontSize: 40, 
    color: "#3b5998",

  },

  logotipo: {
    width: 300,
    height: 100,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 40
    },
    

  },

}));

const AppFooter = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container alignItems="center">
        <Grid item xs={12} md={2} className={classes.container}>
          <img src={logoSism} alt="sism" className={classes.logotipo}></img>
        </Grid>
        <Grid item xs={12} md={8} className={classes.container}  >
          Carrera 19 No. 26B - 53 Barrio Los Naranjos <br /> Tel: (5)4394152 - 4394153 Santa Marta D.T.C.H.
      </Grid>
        <Grid item xs={12} md={2} className={classes.container}>
          Visita nuestras redes sociales
      <Grid className={classes.iconsWrapper}>
            <Grid item className={classes.icons}>
            <FacebookIcon className={classes.iconfb} />
              
              <TwitterIcon style={{ fontSize: 40, color: "#00acee" }} className={classes.icon} />
              
              {/* <a href="https://www.facebook.com/sism.ips" rel="noopener noreferrer" target="_blank" className="enlaceMenu">
                <FacebookIcon className={classes.iconfb} />
              </a>
              <a href="https://twitter.com/ipssism" rel="noopener noreferrer" target="_blank" className="enlaceMenu">
                <TwitterIcon style={{ fontSize: 40, color: "#00acee" }} className={classes.icon} />
              </a> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default AppFooter;
