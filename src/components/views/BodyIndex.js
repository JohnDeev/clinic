import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import EnterpriseValue from './EnterpriseValue';
import Home from './Home';
import TwTimeline from './TwTimeline';
import FbTimeline from './FbTimeline';
import Calendario from './Calendario';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function BodyIndex() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        
        <Grid item xs={12} sm={9}>
          <EnterpriseValue />
          <Home />

        </Grid>
        <Grid item xs={12} md={3}>
          <TwTimeline />
          <FbTimeline />
          <Calendario />
        </Grid>
        
      </Grid>
    </div>
  );
}
