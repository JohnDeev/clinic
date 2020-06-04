import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

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
      
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/static/themes/onepirate/productValues1.svg"
                alt="icon1"
              />
              <Typography variant="h6" className={classes.title}>
                text1
              </Typography>
              <Typography variant="h5">
                {'Descriptive text 1'}
                
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/static/themes/onepirate/productValues2.svg"
                alt="icon2"
              />
              <Typography variant="h6" className={classes.title}>
                text2
              </Typography>
              <Typography variant="h5">
              {'Descriptive text 2'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/static/themes/onepirate/productValues3.svg"
                alt="icon3"
              />
              <Typography variant="h6" className={classes.title}>
                text3
              </Typography>
              <Typography variant="h5">
              {'Descriptive text 3'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

EnterpriseValue.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnterpriseValue);