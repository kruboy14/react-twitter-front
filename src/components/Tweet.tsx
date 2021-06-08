import {
  Avatar,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import blueGrey from '@material-ui/core/colors/blueGrey';
import LikeIcon from '@material-ui/icons/FavoriteBorder';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RetweetIcon from '@material-ui/icons/RepeatOutlined';
import ShareIcon from '@material-ui/icons/ShareOutlined';
import React, { FC, ReactElement } from 'react';
import Color from 'color';
import classNames from 'classnames';

const useStylesTweet = makeStyles((theme) => ({
  wrapper: {
    height: '100%',
    borderTop: 0,
    borderBottom: 0,
  },
  tweetsHeader: {
    borderTop: 0,
    borderRight: 0,
    borderLeft: 0,
    padding: '8px 16px',
    borderBottom: '  12px solid rgba(247, 249, 250);',
  },
  tweet: {
    display: 'flex',
    borderRight: 0,
    borderLeft: 0,
    padding: theme.spacing(1.5),
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#F7F7F7',
    },
  },
  tweetUsername: {
    color: blueGrey[400],
  },
  buttonsGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginRight: 60,
    marginLeft: -12,
  },
  button: {
    paddingRight: 20,
  },
  buttonComment: {
    '&:hover': {
      color: theme.palette.primary.main,
      '& $iconComment': {
        color: theme.palette.primary.main,
        backgroundColor: Color(theme.palette.primary.main).alpha(0.1).string(),
      },
    },
  },
  buttonRetweet: {
    '&:hover': {
      color: 'green',
      '& $iconRetweet': {
        color: 'green',
        backgroundColor: 'rgba(0, 255, 0, .1)',
      },
    },
  },
  buttonLike: {
    '&:hover': {
      color: 'red',
      '& $iconLike': {
        color: 'red',
        backgroundColor: 'rgba(255, 0, 0, .1)',
      },
    },
  },
  buttonShare: {
    '&:hover': {
      color: theme.palette.primary.main,
      '& $iconShare': {
        color: theme.palette.primary.main,
        backgroundColor: Color(theme.palette.primary.main).alpha(0.1).string(),
      },
    },
  },

  iconComment: {},
  iconRetweet: {},
  iconLike: {},
  iconShare: {},
}));

interface TweetProps {
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
  text: string;
}

export const Tweet: FC<TweetProps> = ({
  user,
  text,
}: TweetProps): ReactElement => {
  const classes = useStylesTweet();

  return (
    <Paper className={classes.wrapper} variant="outlined" square>
      <Paper className={classes.tweetsHeader} variant="outlined" square>
        <Typography variant="h6">Home </Typography>
      </Paper>
      <Paper className={classes.tweet} variant="outlined" square>
        <Avatar alt={user.fullname} src={user.avatarUrl} />

        <div className={classes.tweetContent}>
          <Typography>
            <b>{user.fullname}</b>&nbsp;
            <span className={classes.tweetUsername}>{user.username}</span>
            &nbsp;
            <span className={classes.tweetUsername}>·</span>&nbsp;
            <span className={classes.tweetUsername}>1 hour</span>
          </Typography>
          <Typography variant={'body1'}>{text}</Typography>
          <div className={classes.buttonsGroup}>
            <div className={classNames(classes.button, classes.buttonComment)}>
              <IconButton className={classes.iconComment}>
                <CommentIcon />
              </IconButton>
              <span>1</span>
            </div>
            <div className={classNames(classes.button, classes.buttonRetweet)}>
              <IconButton className={classes.iconRetweet}>
                <RetweetIcon />
              </IconButton>
              <span>1</span>
            </div>
            <div className={classNames(classes.button, classes.buttonLike)}>
              <IconButton className={classes.iconLike}>
                <LikeIcon />
              </IconButton>
              <span>1</span>
            </div>
            <div className={classNames(classes.button, classes.buttonShare)}>
              <IconButton className={classes.iconShare}>
                <ShareIcon />
              </IconButton>
              <span>1</span>
            </div>
          </div>
        </div>
      </Paper>
    </Paper>
  );
};
