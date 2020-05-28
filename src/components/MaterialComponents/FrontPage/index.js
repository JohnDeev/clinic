import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FrontPageLayout from './FrontPageLayout';

const styles = (theme) => ({
  background: {
    backgroundImage: props => `url(${props.imagen})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  h2: {
    marginBottom: theme.spacing(2),
    fontSize: 40,
    [theme.breakpoints.up('sm')]: {
      fontSize: 62,
    },
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(2),

    },
  },
});

function FrontPage(props) {
  const { classes } = props;

  return (
    <FrontPageLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      {/* <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" /> */}
      <Typography color="inherit" align="center" variant="h2" marked="center" className={classes.h2}>
        Servicios Integrales de Salud del Magdalena
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Su salud en buenas manos.
      </Typography>
    </FrontPageLayout>
  );
}

FrontPage.propTypes = {
  classes: PropTypes.object.isRequired,
  imagen: PropTypes.string.isRequired,
};

export default withStyles(styles)(FrontPage);
