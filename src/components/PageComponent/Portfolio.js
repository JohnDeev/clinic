import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//import CssBaseline from '@material-ui/core/CssBaseline';

import ImageBanner from './../MaterialComponents/ImageBanner';

import medicinageneral from './../../img/portfolioImg/medicinageneral.jpg';
import medicinainterna from './../../img/portfolioImg/medicinainterna.png';
import ginescostetricia from './../../img/portfolioImg/ginescostetricia.jpg';
import pediatria from './../../img/portfolioImg/pediatria.png';
import enfermeria from './../../img/portfolioImg/enfermeria.jpg';
import promocionensalud from './../../img/portfolioImg/promocionensalud.jpg';
import planificacionfamiliar from './../../img/portfolioImg/planificacionfamiliar.jpg';
import nutricionydietetica from './../../img/portfolioImg/nutricionydietetica.jpg';
import psicologia from './../../img/portfolioImg/psicologia.jpeg';
import laboratorioclinico from './../../img/portfolioImg/laboratorioclinico.jpg';
import tomademuestradelaboratorioclinico from './../../img/portfolioImg/tomademuestradelaboratorioclinico.jpg';
import endocrinologia from './../../img/portfolioImg/endocrinologia.jpg';
import gastroenterologia from './../../img/portfolioImg/gastroenterologia.jpg';
import neumologia from './../../img/portfolioImg/neumologia.jpg';
import neurologia from './../../img/portfolioImg/neurologia.jpg';
import otorrinolaringologia from './../../img/portfolioImg/otorrinolaringologia.jpg';
import urologia from './../../img/portfolioImg/urologia.png';
import dermatologia from './../../img/portfolioImg/dermatologia.jpg';
import ultrasonido from './../../img/portfolioImg/ultrasonido.jpg';


const useStyles = makeStyles((theme) => ({
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

const infoPortfolio=[

{id:1 , name:'Medicina General', image:{medicinageneral}, description: '1'},
{id:2 , name:'Medicina Interna', image:{medicinainterna}, description: '2'},
{id:3 , name:'Ginescostetricia', image:{ginescostetricia}, description: '3'},
{id:4 , name:'Pediatria', image:{pediatria}, description: '4'},
{id:5 , name:'Enfermería', image:{enfermeria}, description: '5'},
{id:6 , name:'Promoción en salud', image:{promocionensalud}, description: '6'},
{id:7 , name:'Planificación familiar', image:{planificacionfamiliar}, description: '7'},
{id:8 , name:'Nutrición y dietética', image:{nutricionydietetica}, description: '8'},
{id:9 , name:'Psicología', image:{psicologia}, description: '9'},
{id:10 ,name:'Laboratorio clínico', image:{laboratorioclinico}, description: '10'},
{id:11 ,name:'Toma de muestras de laboratorio clínico', image:{tomademuestradelaboratorioclinico}, description: '11'},
{id:12 ,name:'Endocrinología', image:{endocrinologia}, description: '12'},
{id:13 ,name:'Gastroenterología', image:{gastroenterologia}, description: '13'},
{id:14 ,name:'Neumología', image:{neumologia}, description: '14'},
{id:15 ,name:'Neurología', image:{neurologia}, description: '15'},
{id:16 ,name:'Otorrinolaringología', image:{otorrinolaringologia}, description: '16'},
{id:17 ,name:'Urología', image:{urologia}, description: '17'},
{id:18 ,name:'Dermatología', image:{dermatologia}, description: '18'},
{id:19 ,name:'Ultrasonido', image:{ultrasonido}, description: '19'},

]

export default function Album() {
  const classes = useStyles();

  return (
    <main>
      <ImageBanner titulo='Nuestros servicios' />
          
       <Container className={classes.cardGrid} >
      {/* End hero unit */}
      <Grid container spacing={6}>
        {infoPortfolio.map((item, key) => (
          <Grid item key={item} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.name}
                </Typography>
                <Typography>
                    {item.description}                
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </main>
  );
}
