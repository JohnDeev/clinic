import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import ImageBanner from './../../MaterialComponents/ImageBanner';

import FormContact from './FormContact';
import { Typography } from '@material-ui/core';

// eslint-disable-next-line
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(5),
    //display: 'flex',
    alignItems: 'center',

  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {

    width: 256,
    height: 256,


  },
  img: {
    margin: 'auto',
    display: 'block',
    /*     maxWidth: '100%',
        maxHeight: '100%', */
    width: 256,
    height: 256,
    borderRadius: '50%',
    justifyContent: "center",
  },

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  text: {
    display: 'hover',
    justifyContent: 'justify',
    alignItems: 'justify',
    paddingTop: '20px',
    //marginLeft: theme.spacing(6),
    
  },
}));



export default function CompCOntact() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <ImageBanner titulo='Contáctenos' />
      <Container className={classes.container}>
      <Typography align='justify' variant='h4'>Escríbenos su mensaje</Typography>
        <Typography align='justify'>Si tiene una pregunta o sugerencia, por favor, no dude en enviarnos un mensaje. Uno de nuestros funcionarios le dará respuesta en el menor tiempo posible.</Typography>
        <FormContact/>
      </Container>
    </React.Fragment>
  );
}

//export default AboutUs;