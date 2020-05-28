import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import {infoPortfolio} from './../../const/infos';


const useStyles = makeStyles((theme) => ({
  texto:{
    textAlign: "justify",
    paddingBottom: 15,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: "fixed",
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));


export default function Album() {
  const classes = useStyles();

  return (
    <main>
             
       <Container className={classes.cardGrid} >
      {/* End hero unit */}
      <Typography className={classes.texto}>Como Institución prestadora de servicios de salud ofrecemos servicios de I y  II Nivel de Complejidad de tipo ambulatorio, enmarcados en un modelo familiar como su eje y objetivo.</Typography>
      <Grid container spacing={6}>
        {infoPortfolio.map((item) => (
          <Grid item key={item.name} xs={12} sm={6} md={4}>
         
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={item.image}
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.name}
                </Typography>
                {/* <Typography>
                    {item.description}                
                </Typography> */}
              </CardContent>
              {/* <CardActions>
                <Button size="small" color="primary">
                  View
                </Button>
              </CardActions> */}
            </Card>
          </Grid>
        ))}
      </Grid>
      
    </Container>
  </main>
  );
}
