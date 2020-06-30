import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
  import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { mision, vision, infoPrincipios } from './../../const/infos';

import misionImg from './../../img/misionTest.jpg';
import visionImg from './../../img/visionTest.jpg';

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import GridImages from './GridImages';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  img: {
    margin: 'auto',
    /*     maxWidth: '100%',
        maxHeight: '100%', */
    width: 256,
    height: 256,  
    borderRadius: '50%',

  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: "fixed",
  },

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  texto: {
    textAlign: "justify",
  },
  solveCard: {
    maxWidth: 'fixed',
    height: '100%',
  },
}));

export default function AboutUs() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container >
        <Fade left>
          <div className={classes.root}><h2 className={classes.texto}>Misión</h2></div>
          <Grid container spacing={1} alignItems="center">
            <Grid xs={12} md={4}>
              <img className={classes.img} alt="mision" src={misionImg} />
            </Grid>
            <Grid xs={12} md={8} container>
              <Typography className={classes.texto}>
                {mision}
                </Typography>
            </Grid>
          </Grid>
        </Fade>
        <Fade right>
          <div className={classes.root}><h2 className={classes.texto}>Visión</h2></div>
          <Grid container spacing={1} alignItems="center" direction="row-reverse">
            <Grid xs={12} md={4}>
              <div ><img className={classes.img} alt="vision" src={visionImg} /></div>
            </Grid>
            <Grid xs={12} md={8} container>
              <Typography className={classes.texto}>
                {vision}
                </Typography>
            </Grid>
          </Grid>
        </Fade>
        <h2>Principios Corporativos</h2>
        <Container className={classes.cardGrid} >
          {/* End hero unit */}
          <Grid container spacing={6}>
            {infoPrincipios.map((item, key) => (
              <Grid item key={item.id} xs={12} sm={6} md={4}>
                <Zoom cascade>
                  <div className={classes.solveCard}>
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.texto}>
                          {item.name}
                        </Typography>
                        <Typography className={classes.texto}>
                          {item.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Container>
        <GridImages />
      </Container>
    </React.Fragment>
  );
}