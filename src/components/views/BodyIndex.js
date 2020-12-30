import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// eslint-disable-next-line 
import TwTimeline from './TwTimeline';
// eslint-disable-next-line 
import FbTimeline from './FbTimeline';
// eslint-disable-next-line 
import Calendario from './Calendario';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
});

const BodyIndex = ({ contenido, classes }) => {
  //const  = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>

        <Grid item xs={12} md={12}>
          {contenido}

        </Grid>
        {/* 
        <Grid item xs={12} md={9}>
          {contenido}

        </Grid>
        <Grid item xs={12} md={3}>
          <TwTimeline />
          <FbTimeline />
          <Calendario />
        </Grid> */}
      </Grid>
    </div>
  );
}
export default withStyles(styles)(BodyIndex);
