import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

//import ImageBanner from './../MaterialComponents/ImageBanner';


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
    display: 'inline-center',
    /*     maxWidth: '100%',
        maxHeight: '100%', */
    width: 256,
    height: 256,
    borderRadius: '50%',
    justifyContent: "center",
    
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
}));


const infoPrincipios = [

  { id: 1, name: 'Solidaridad', description: 'Por nuestro sentido social y humano brindamos apoyo, atención a nuestros usuarios en forma inmediata especialmente a los sectores más vulnerables de nuestra sociedad. ' },
  { id: 2, name: 'Calidad', description: 'Satisfacción de las necesidades de los usuarios, de conformidad con la normatividad vigente, y mejoramiento continuo de los procesos. ' },
  { id: 3, name: 'Ética', description: 'Constituida por valores morales que permiten a la persona adoptar decisiones y determinar un comportamiento apropiado, esos valores deben estar basados en lo que es correcto, lo cual ir más allá de lo que es legal.' },
  { id: 4, name: 'Universalidad', description: 'Acorde a la normatividad existente y los resultados disponibles de la empresa, los servicios que se ofrecen serán prestados sin ningún tipo de discriminación racial, edad, sexo, idioma, clase social o credo.' },
  { id: 5, name: 'Honestidad y transparencia', description: 'Cualidad humana por la que la persona se determina a elegir y actuar siempre con base en la verdad y en la auténtica justicia (dando a cada quien lo que le corresponde, incluida ella misma) asumir que la verdad es solo una y que no depende de personas o consensos si no de lo que el mundo real nos presenta como innegable e imprescindible de reconocer.' },
  { id: 6, name: 'Eficiencia', description: 'Máxima productividad de los recursos asignados para agregar valor a los servicios prestados a la comunidad. ' },
  { id: 7, name: 'Búsqueda de la excelencia', description: 'A través de un equipo de trabajo multidisciplinario está comprometido con un proceso continuo de mejoramiento de los estándares de calidad en la prestación de servicios de salud.' },
  { id: 8, name: 'Planeación y Autocontrol', description: 'Se esperan que el resultados sean óptimos.' },
  { id: 9, name: 'Disciplina', description: 'Optimizar todos los recursos para prestar servicios con calidad y accequibilidad a los usuarios. ' },
  { id: 10, name: 'Participación social', description: 'Tener en cuenta los usuarios y su entorno familiar para la socialización de los programas enfocados al mejoramiento de la calidad de le empresa, y a los programas que van dirigidos a mejorar su calidad de vida dependiendo del programa al que pertenezcan' },

]

export default function AboutUs() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container >
        <Typography component="div" style={{ textAlign: 'justify' }}>
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
          <Container className={classes.cardGrid} >
            {/* End hero unit */}
            <Grid container spacing={6}>
              {infoPrincipios.map((item, key) => (
                <Grid item key={item.id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.name}
                      </Typography>
                      <Typography>
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

//export default AboutUs;