import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

import { SearchTextField } from '../components/SearchTextField';
import { SideMenu } from '../components/SideMenu';
import { Tweet } from '../components/Tweet';

export const useStylesHome = makeStyles((theme) => ({
  wrapper: {
    height: '100%',
  },
}));

export const Home = () => {
  const classes = useStylesHome();

  return (
    <Container maxWidth="lg">
      <Grid className={classes.wrapper} container spacing={3}>
        <Grid item xs={2}>
          <SideMenu />
        </Grid>
        <Grid item xs={7}>
          <Tweet />
        </Grid>
        <Grid item xs={3}>
          <SearchTextField />
        </Grid>
      </Grid>
    </Container>
  );
};
