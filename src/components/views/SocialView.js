import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TwTimeline from './TwTimeline';
import FbTimeline from './FbTimeline';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function SocialView() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        
        <Grid item xs={6}>
          <TwTimeline />
        </Grid>
        <Grid item xs={6}>
          <FbTimeline />
        </Grid>
        
      </Grid>
    </div>
  );
}