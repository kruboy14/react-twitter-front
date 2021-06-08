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
        <Grid item xs={6}>
          <Tweet
            user={{
              fullname: 'Artem',
              username: '@kruboy',
              avatarUrl:
                'https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            }}
            text="Numerous websites were unavailable on Tuesday after an apparent widespread at cloud service company Fastly. Dozens of high-traffic websites including the New York Times, CNN, Twitch and the U.K. government’s home page, could not be reached."
          />
        </Grid>
        <Grid item xs={4}>
          <SearchTextField />
        </Grid>
      </Grid>
    </Container>
  );
};
