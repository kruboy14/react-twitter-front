import { makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStylesTweet = makeStyles((theme) => ({
  wrapper: {
    height: '100%',
    borderTop: 0,
    borderBottom: 0,
  },
}));

export const Tweet = () => {
  const classes = useStylesTweet();

  return (
    <Paper className={classes.wrapper} variant="outlined" square>
      <Typography variant="h6">Home </Typography>
    </Paper>
  );
};
