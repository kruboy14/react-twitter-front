import {
  createStyles,
  makeStyles,
  TextField,
  Button,
  CircularProgress,
  Typography,
  Avatar,
} from '@material-ui/core';
import React, { FC, ReactElement } from 'react';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import { useState } from 'react';
import classNames from 'classnames';
import { countTweetLength, Iprogress } from '../utils/helpers/countTweetLength';

const useAddTweetFormStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      display: 'flex',
      padding: '10px 15px 0 15px',
    },
    avatar: {
      flex: '0 1 10%',
    },
    content: {
      flex: '1 1 auto',
      display: 'flex',
      flexDirection: 'column',
    },
    textField: {
      width: '100%',
      margin: 5,
      fontSize: 20,
    },
    inputProp: {
      fontSize: 20,
      '&::placeholder': {
        color: '#5B7083',
        opacity: 0.9,
      },
    },
    footer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    footerLeft: {},
    footerRight: {
      display: 'flex',
      alignItems: 'center',
    },
    progress: {
      position: 'relative',
    },
    progressTop: {
      position: 'absolute',
      left: 0,
      zIndex: 1,
    },
    progressBottom: {},
    progressSuper: {
      color: 'yellow',
    },
    remainLength: {
      position: 'absolute',
      minWidth: 15,
      fontSize: 12,
      left: '23%',
      top: '13%',
      textAlign: 'center',
    },
    negativeLength: {
      color: 'red',
      paddingRight: 10,
      paddingBottom: 3,
    },
    buttonTweet: {
      marginLeft: 10,
    },
  }),
);

export const AddTweetForm: FC = (): ReactElement => {
  const classes = useAddTweetFormStyles();
  const [textFieldValue, setTextFieldValue] = useState<string>('');
  const [progressValue, setprogressValue] = useState<Iprogress | null>(null);
  const handleTextField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextFieldValue(e.target.value);
    console.log(e.target.value);

    setprogressValue(countTweetLength(e.target.value));
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.avatar}>
        <Avatar
          alt="Remy Sharp"
          src="https://pbs.twimg.com/profile_images/1267938486566428673/US6KRPbA_normal.jpg"
        />
      </div>
      <div className={classes.content}>
        <TextField
          onChange={handleTextField}
          value={textFieldValue}
          placeholder="What`s happening?"
          multiline
          InputProps={{
            disableUnderline: true,
            classes: { input: classes.inputProp },
          }}
          className={classes.textField}>
          <span>111</span>
        </TextField>
        <div className={classes.footer}>
          <div className={classes.footerLeft}>
            <CropOriginalIcon color="primary" />
            <SentimentVerySatisfiedIcon color="primary" />
          </div>
          <div className={classes.footerRight}>
            <div className={classes.progress}>
              {Number(progressValue?.len) >= 0 &&
              Number(progressValue?.len) < 280 ? (
                <>
                  {console.log(Number(progressValue?.len))}
                  <CircularProgress
                    size={30}
                    className={classNames(classes.progressTop, {
                      [classes.progressSuper]: Number(progressValue?.len) < 21,
                    })}
                    variant="determinate"
                    value={progressValue?.percent}
                  />
                  <CircularProgress
                    className={classes.progressBottom}
                    size={30}
                    variant="determinate"
                    value={100}
                    style={{ color: '#EBEEF0' }}
                  />
                  {Number(progressValue?.len) < 21 && (
                    <Typography className={classes.remainLength}>
                      {Number(progressValue?.len)}
                    </Typography>
                  )}
                </>
              ) : (
                <Typography className={classes.negativeLength}>
                  {isNaN(Number(progressValue?.len)) ||
                  Number(progressValue?.len) === 280
                    ? null
                    : Number(progressValue?.len)}
                </Typography>
              )}
            </div>
            <Button
              className={classes.buttonTweet}
              variant="contained"
              color="primary">
              Tweet
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
