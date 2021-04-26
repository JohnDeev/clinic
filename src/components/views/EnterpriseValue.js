import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    //backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function EnterpriseValue(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
      
        <Grid container spacing={5} justify="center">
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <WhatsAppIcon fontSize='large'/>
              <Typography variant="h6" className={classes.title}>
                Aparte su cita vía WhatsApp
              </Typography>
              <Typography  variant="h5">
                <a href="https://api.whatsapp.com/send?phone=+573105438731&text= Buenas,%20deseo%20apartar%20una%20cita%20médica." 
                target="_blank"  
                rel="noopener noreferrer">Apartar cita
                </a>
                
              </Typography>
            </div>
          </Grid>
          {/* <Grid item xs={12} md={4}>
            <div className={classes.item}>
            <img
                className={classes.image}
                src="/static/themes/onepirate/productValues2.svg"
                alt="icon2"
              />
              <Typography variant="h6" className={classes.title}>
                Sedes
              </Typography>
              <Typography variant="h5">
              {'Conoce nuestras sedes'}
              </Typography>
            </div>
          </Grid> */}
          {/* <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/static/themes/onepirate/productValues3.svg"
                alt="icon3"
              />
              <Typography variant="h6" className={classes.title}>
                Estados financieros
              </Typography>
              <Typography variant="h5">
              {'Descargar'}
              </Typography>
            </div>
          </Grid> */}
        </Grid>
      </Container>
    </section>
  );
}

EnterpriseValue.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnterpriseValue);
