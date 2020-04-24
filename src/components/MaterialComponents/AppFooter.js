import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
// eslint-disable-next-line
import TextField from '@material-ui/core/TextField';
import { grey } from '@material-ui/core/colors';

import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook'
import './styles.css';


// eslint-disable-next-line
function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="https://material-ui.com/">
        SISM
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: grey,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(5),
    display: 'flex',
  },
  iconsWrapper: {
    height: 20,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: theme.palette.warning.main,

    marginRight: theme.spacing(1),
    '&:hover': {
      //backgroundColor: theme.palette.warning.dark,
    },
  },
  text: {
    display: 'hover',
    justifyContent: 'justify',
    alignItems: 'justify',
    marginLeft: theme.spacing(6),
  },
  list: {
    margin: 0,
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },

}));

export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              // container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={2}>
              <Grid item className={classes.icons}>
                <a href="https://www.facebook.com/sism.ips" rel="noopener noreferrer" target="_blank" className="enlaceMenu">
                  <FacebookIcon style={{ fontSize: 40, color: "#3b5998" }} className={classes.icon} />
                </a>
                <a href="https://twitter.com/ipssism" rel="noopener noreferrer" target="_blank" className="enlaceMenu">
                  <TwitterIcon style={{ fontSize: 40, color: "#00acee" }} className={classes.icon} />
                </a>
              </Grid>

            </Grid>
          </Grid>
          <Grid /* container */ item xs={6} sm={4} md={5} className={classes.text}>
            <Typography marked="left" gutterBottom >
              Carrera 19 No. 26B - 53 Barrio Los Naranjos
            </Typography>
            <Typography marked="left" gutterBottom >
              Tel: (5)4394152 - 4394153 Santa Marta D.T.C.H.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
