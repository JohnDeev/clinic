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

{id:1 ,name:'Medicina General', image:'', description: '1'},
{id:2 ,name:'Medicina Interna', image:'', description: '2'},
{id:3 ,name:'Ginescostetricia', image:'', description: '3'},
{id:4 ,name:'Pediatria', image:'', description: '4'},
{id:5 ,name:'Enferería', image:'', description: '5'},
{id:6 ,name:'Promoción en salud', image:'', description: '6'},
{id:7 ,name:'Planificación familiar', image:'', description: '7'},
{id:8 ,name:'Nutrición y dietética', image:'', description: '8'},
{id:9 ,name:'Psicología', image:'', description: '9'},
{id:10 ,name:'Laboratorio clínico', image:'', description: '10'},
{id:11 ,name:'Toma de muestras de laboratorio clínico', image:'', description: '11'},
{id:12 ,name:'Endocrinología', image:'', description: '12'},
{id:13 ,name:'Gastroenterología', image:'', description: '13'},
{id:14 ,name:'Neumología', image:'', description: '14'},
{id:15 ,name:'Neurología', image:'', description: '15'},
{id:16 ,name:'Otorrinolaringología', image:'', description: '16'},
{id:17 ,name:'Urología', image:'', description: '17'},
{id:18 ,name:'Dermatología', image:'', description: '18'},
{id:19 ,name:'Ultrasonido', image:'', description: '19'},

]

export default function Album() {
  const classes = useStyles();

  return (
    <main>
          
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
{item.description}                </Typography>
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
