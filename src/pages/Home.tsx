import {
  Container,
  Grid,
  Hidden,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import React from 'react';

import { SearchTextField } from '../components/SearchTextField';
import { SideMenu } from '../components/SideMenu';
import { Trends } from '../components/Trends';
import { Tweet } from '../components/Tweet';

export const useStylesHome = makeStyles((theme) => ({
  wrapper: {
    height: '100%',
  },
  tweetWrapper: {
    height: '100%',
    borderTop: 0,
    borderBottom: 0,
  },

  rightSideBlock: {
    position: 'sticky',
    top: 0,
   
    paddingRight: 60,
  },
  tweetsHeader: {
    borderTop: 0,
    borderRight: 0,
    borderLeft: 0,
    padding: '8px 16px',
    borderBottom: '  12px solid rgba(247, 249, 250);',
  },
}));

export const Home = () => {
  const classes = useStylesHome();

  return (
    <Container maxWidth="lg">
      <Grid className={classes.wrapper} container spacing={3}>
        <Hidden xsDown>
          <Grid item md={1} lg={2}>
            <SideMenu />
          </Grid>
        </Hidden>
        <Grid item sm={10} md={7} lg={6}>
          <Paper className={classes.tweetWrapper} variant="outlined" square>
            <Paper className={classes.tweetsHeader} variant="outlined" square>
              <Typography variant="h6">Home </Typography>
            </Paper>
            <Tweet
              user={{
                fullname: 'Artem',
                username: '@kruboy',
                avatarUrl:
                  'https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
              }}
              text="Numerous websites were unavailable on Tuesday after an apparent widespread at cloud service company Fastly. Dozens of high-traffic websites including the New York Times, CNN, Twitch and the U.K. government’s home page, could not be reached."
            />
            <Tweet
              user={{
                fullname: 'Artem',
                username: '@kruboy',
                avatarUrl:
                  'https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
              }}
              text="Numerous websites were unavailable on Tuesday after an apparent widespread at cloud service company Fastly. Dozens of high-traffic websites including the New York Times, CNN, Twitch and the U.K. government’s home page, could not be reached."
            />
            <Tweet
              user={{
                fullname: 'Artem',
                username: '@kruboy',
                avatarUrl:
                  'https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
              }}
              text="Numerous websites were unavailable on Tuesday after an apparent widespread at cloud service company Fastly. Dozens of high-traffic websites including the New York Times, CNN, Twitch and the U.K. government’s home page, could not be reached."
            />
            <Tweet
              user={{
                fullname: 'Artem',
                username: '@kruboy',
                avatarUrl:
                  'https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
              }}
              text="Numerous websites were unavailable on Tuesday after an apparent widespread at cloud service company Fastly. Dozens of high-traffic websites including the New York Times, CNN, Twitch and the U.K. government’s home page, could not be reached."
            />
            <Tweet
              user={{
                fullname: 'Artem',
                username: '@kruboy',
                avatarUrl:
                  'https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
              }}
              text="Numerous websites were unavailable on Tuesday after an apparent widespread at cloud service company Fastly. Dozens of high-traffic websites including the New York Times, CNN, Twitch and the U.K. government’s home page, could not be reached."
            />
            <Tweet
              user={{
                fullname: 'Artem',
                username: '@kruboy',
                avatarUrl:
                  'https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
              }}
              text="Numerous websites were unavailable on Tuesday after an apparent widespread at cloud service company Fastly. Dozens of high-traffic websites including the New York Times, CNN, Twitch and the U.K. government’s home page, could not be reached."
            />
            <Tweet
              user={{
                fullname: 'Artem',
                username: '@kruboy',
                avatarUrl:
                  'https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
              }}
              text="Numerous websites were unavailable on Tuesday after an apparent widespread at cloud service company Fastly. Dozens of high-traffic websites including the New York Times, CNN, Twitch and the U.K. government’s home page, could not be reached."
            />
            <Tweet
              user={{
                fullname: 'Artem',
                username: '@kruboy',
                avatarUrl:
                  'https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
              }}
              text="Numerous websites were unavailable on Tuesday after an apparent widespread at cloud service company Fastly. Dozens of high-traffic websites including the New York Times, CNN, Twitch and the U.K. government’s home page, could not be reached."
            />
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid item xs={4}>
            <div className={classes.rightSideBlock}>
              <SearchTextField />
              <Trends />
            </div>
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  );
};
