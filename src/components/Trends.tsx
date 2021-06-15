import {
  Avatar,
  Button,
  createStyles,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import blueGrey from '@material-ui/core/colors/blueGrey';

import React, { ReactElement } from 'react';
import { FC } from 'react';
const useTrendsStyles = makeStyles((theme) =>
  createStyles({
    trendsSideBlock: {
      backgroundColor: '#F7F9FA',
      borderRadius: '5px 0 10px 10px',
      marginTop: 20,
      '& .MuiList-root': {
        paddingTop: 0,
      },
    },

    trendsSideBlockHeader: {
      border: 0,
      backgroundColor: 'transparent',
      padding: '13px 18px',
      '& b': {
        fontSize: 20,
        fontWeight: 800,
      },
    },
    trendsSideBlockItem: {
      borderTop: `1px solid ${blueGrey[100]}`,
      cursor: 'pointer',
      '& .MuiTypography-body1': {
        fontWeight: 700,
      },
      '& .MuiListItemAvatar-root': {
        minWidth: 50,
      },
      '& .MuiListItemText-root': {
        margin: 0,
      },
      '&:hover': {
        backgroundColor: '#edf3f6',
      },
    },
  }),
);
export const Trends: FC = (): ReactElement => {
  const classes = useTrendsStyles();
  return (
    <>
      <Paper className={classes.trendsSideBlock}>
        <Paper className={classes.trendsSideBlockHeader} variant="outlined">
          <b>Trends for you</b>
        </Paper>
        <List>
          <ListItem className={classes.trendsSideBlockItem}>
            <ListItemText
              primary="Beer"
              secondary={
                <Typography
                  component="span"
                  variant="body2"
                  color="textSecondary">
                  Tweets: 3 331
                </Typography>
              }
            />
          </ListItem>

          <ListItem className={classes.trendsSideBlockItem}>
            <ListItemText
              primary="#React"
              secondary={
                <Typography
                  component="span"
                  variant="body2"
                  color="textSecondary">
                  Tweets: 163 122
                </Typography>
              }
            />
          </ListItem>

          <ListItem className={classes.trendsSideBlockItem}>
            <ListItemText
              primary="Busich"
              secondary={
                <Typography
                  component="span"
                  variant="body2"
                  color="textSecondary">
                  Твитов: 13 554
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Paper>
      <Paper className={classes.trendsSideBlock}>
        <Paper className={classes.trendsSideBlockHeader} variant="outlined">
          <b>Who to follow</b>
        </Paper>
        <List>
          <ListItem className={classes.trendsSideBlockItem}>
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://pbs.twimg.com/profile_images/1267938486566428673/US6KRPbA_normal.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Dock Of Shame"
              secondary={
                <Typography
                  component="span"
                  variant="body2"
                  color="textSecondary">
                  @FavDockOfShame
                </Typography>
              }
            />
            <Button color="primary">
              <span>Follow</span>
            </Button>
          </ListItem>
        </List>
      </Paper>
    </>
  );
};
