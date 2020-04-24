import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import ImageBanner from './../../MaterialComponents/ImageBanner';

import FormContact from './FormContact';

// eslint-disable-next-line
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
}));



export default function CompCOntact() {
  //const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <ImageBanner titulo='Contáctenos' />
      <Container >
        <FormContact/>
      </Container>
    </React.Fragment>
  );
}

//export default AboutUs;