import React from 'react';
import LoremIpsum from 'react-lorem-ipsum';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// eslint-disable-next-line
import ButtonBase from '@material-ui/core/ButtonBase';

import mision from './../../img/misionTest.jpg';
import vision from './../../img/visionTest.jpg';

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
}));



export default function AboutUs(){
  const classes = useStyles();
    
        return (
            <React.Fragment>
            <CssBaseline />
            <Container >
              <Typography component="div" style={{ textAlign:'justify'}}>
              <div className={classes.root}><h2>Misión</h2></div>
              <Grid container spacing={1} alignItems="center">
          <Grid item>
            
              <div><img className={classes.img} alt="mision" src={mision} /></div>
              
           
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography>
                    SERVICIOS INTEGRALES DE SALUD DEL MAGDALENA es una Institución Prestadora de Servicios de Salud privada, 
                    orientada a satisfacer las necesidades en salud de nuestros clientes, de manera eficaz y eficiente, apoyados 
                    en un Talento Humano Competente, en aras de mejorar su calidad de vida.  
                </Typography>
              </Grid>             
            </Grid>
          </Grid>
        </Grid>


        <div className={classes.root}><h2>Visión</h2></div>
              <Grid container spacing={1} alignItems="center" direction="row-reverse">
          <Grid item>
            
              <div><img className={classes.img} alt="mision" src={vision} /></div>
              
            
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography>
                    Ser identificados y reconocidos, en el año 2017, como una de las mejores Instituciones Prestadoras de Servicios 
                    de Salud en la región caribe, impactando en la Satisfacción de nuestros Clientes, el bienestar de nuestro Talento 
                    Humano y la Rentabilidad Económica de la Empresa.
                </Typography>
              </Grid>             
            </Grid>
          </Grid>
        </Grid>
                <h2>Principios Corporativos</h2>
                <LoremIpsum p={2}/>
            
              </Typography>
            </Container>
            </React.Fragment> 

            
            
        );
    }

//export default AboutUs;