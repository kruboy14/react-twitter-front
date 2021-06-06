import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      borderRadius: 20,
      backgroundColor: '#EBEEF0',
      padding: '5px 10px',
      width: '100%',
      border: '1px solid #EBEEF0',
    },
    inputPlaceholder: {
      '&::placeholder': {
        color: '#5B7083',
        opacity: 0.8,
      },
    },
    inputFocused: {
      border: '1px solid #3DAEF2',
      backgroundColor: '#fff',
    },
    searchIcon: {
      fontSize: 16,
      marginRight: 5,
    },
  }),
);

export const SearchTextField = () => {
  const classes = useStyles();
  return (
    <InputBase
      classes={{
        focused: classes.inputFocused,
        input: classes.inputPlaceholder,
      }}
      startAdornment={<SearchIcon className={classes.searchIcon} />}
      placeholder="Search Twitter"
      className={classes.root}></InputBase>
  );
};


