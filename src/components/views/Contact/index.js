import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
// eslint-disable-next-line 
import FormContact2 from './FormContact2';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Asociacion from "../../../Docs/Asociacion.pdf";
import politicas from "../../../Docs/politica-tt-datos.pdf";
// eslint-disable-next-line 
import Grid from '@material-ui/core/Grid';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

// eslint-disable-next-line
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(5),
    //display: 'flex',
    //alignItems: 'center',

  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  text: {
    display: 'hover',
    justifyContent: 'justify',
    alignItems: 'justify',
    //marginLeft: theme.spacing(6),
    paddingBottom: '20px',

  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
    
  },


}));



const CompContact = () => {
  const classes = useStyles();

//   const handleOnClickPoliticas = () => {
//     const win = window.open('./Docs/AsociacionDeUsuarios.pdf', '_blank');
//     win.focus();
// };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.container}>

        <div className={classes.root}>
          <div className={classes.text}>
            <Typography align='justify' variant='h4'>Horario de atención</Typography>
            <Typography align='justify' >Lunes a Viernes de 7:00 am a 12:00 pm y de 1:00 pm a 5:00 pm</Typography>
          </div>
          <div className={classes.text}>
            <Typography align='justify' variant='h4'>Teléfonos de contacto</Typography>
            <Typography align='justify' >A través de los siguientes canales de comunicación puede solicitar su cita médica y odontológica</Typography>
          </div>



          <Accordion defaultExpanded="true">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Régimen subsidiado</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>

                  <li>4394151</li>
                  <li>4394152</li>
                  <li>4394153</li>
                  <li>4394386</li>

                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded="true">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>Régimen contributivo</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>

                  <li>3105438731</li>
                  <li>3106917684</li>

                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded="true">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>Correo electrónico</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                citasmedicassism@gmail.com
          </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded="true">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
          <Typography className={classes.heading}>Politicas de tratamiento de datos</Typography>
              </AccordionSummary>
               <AccordionDetails>
                  <Button href={politicas} target="_blank">
                    Ver Políticas de datos
                  </Button>
              </AccordionDetails>
            </Accordion>

          <Accordion defaultExpanded="true">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header">
          <Typography className={classes.heading}>Asociación de usuarios</Typography>
              </AccordionSummary>
               <AccordionDetails>
                  <Button href={Asociacion} target="_blank">
                    Ver documento asociación de usuarios
                  </Button>
              </AccordionDetails>
            </Accordion>
            

        </div>

        {/* <Typography align='justify'>
          Si tiene una pregunta o sugerencia, por favor, no dude en enviarnos un mensaje. Uno de nuestros funcionarios le dará respuesta en el menor tiempo posible.
          </Typography> */}
        {/*<Grid container spacing={1} alignItems="center">
          <Grid xs={12} md={6}>

            <Typography align='justify'>Si tiene una pregunta o sugerencia, por favor, no dude en enviarnos un mensaje. Uno de nuestros funcionarios le dará respuesta en el menor tiempo posible.</Typography>
          </Grid>
           <Grid xs={12} md={6}>
            <FormContact2 /> 
          </Grid>
        </Grid>*/}


      </Container>
    </React.Fragment>
  );
}

export default CompContact