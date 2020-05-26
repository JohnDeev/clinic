import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ImageBannerLayout from './ImageBannerLayout';


const styles = (theme) => ({
  background: {
    backgroundImage: props => `url(${props.imagen})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(11),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

const ImageBanner = props => {
  const { classes, titulo } = props;
  
  return (
    <ImageBannerLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      {/* <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      {/* <Typography color="inherit" align="center" variant="h2" marked="center">
        Servicios Integrales de Salud del Magdalena
      </Typography> */}
      <Typography color="inherit" align="center" variant="h4" className={classes.h5}>
        {titulo}
      </Typography>
    </ImageBannerLayout>
  );
}

ImageBanner.propTypes = {
  classes: PropTypes.object.isRequired,
  titulo: PropTypes.string.isRequired,
};

export default withStyles(styles)(ImageBanner);
