import React, { FC } from 'react';

import TwitterIcon from '@material-ui/icons/Twitter';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MessageIcon from '@material-ui/icons/MailOutlineOutlined';
import BookMark from '@material-ui/icons/TurnedInNotOutlined';
import SubjectIcon from '@material-ui/icons/Subject';
import PersonIcon from '@material-ui/icons/PersonOutline';
import CreateIcon from '@material-ui/icons/Create';
import { Button, ButtonBase, Hidden, makeStyles } from '@material-ui/core';
import { IconButton, Typography } from '@material-ui/core';

import Color from 'color';

export const useStylesSideMenu = makeStyles((theme) => ({
  logo: { fontSize: 34 },
  sideMenuListItem: {
    '&:hover ': {
      '& $customIconButton': {
        backgroundColor: Color(theme.palette.primary.main).alpha(0.1).string(),
        color: theme.palette.primary.main,
      },
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
  sideMenuIcon: {
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },

  customIconButton: {
    padding: 10,
    overflow: 'hidden',
    borderRadius: 25,
    color: '#000',
    marginBottom: theme.spacing(1),
    transition: '.1s',
  },

  customIcons: {
    height: 24,
    width: 24,
    fontSize: 24,
  },
  sideMenuList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  sideMenuListItemLabel: {
    paddingLeft: 15,
  },
  buttonTweet: {
    marginTop: theme.spacing(2),
  },
}));

export const SideMenu: FC = () => {
  const classes = useStylesSideMenu();
  return (
    <div>
      <ul className={classes.sideMenuList}>
        <li className={classes.sideMenuIcon}>
          <IconButton color="primary">
            <TwitterIcon className={classes.logo} />
          </IconButton>
        </li>
        <li className={classes.sideMenuListItem}>
          <ButtonBase className={classes.customIconButton}>
            <i className={classes.customIcons}>#</i>
            <Hidden mdDown>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6">
                Поиск
              </Typography>
            </Hidden>
          </ButtonBase>
        </li>
        <li className={classes.sideMenuListItem}>
          <ButtonBase className={classes.customIconButton} color="primary">
            <NotificationsNoneIcon className={classes.customIcons} />
            <Hidden mdDown>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6">
                Уведомления
              </Typography>
            </Hidden>
          </ButtonBase>
        </li>
        <li className={classes.sideMenuListItem}>
          <ButtonBase className={classes.customIconButton} color="primary">
            <MessageIcon className={classes.customIcons} />
            <Hidden mdDown>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6">
                Сообщения
              </Typography>
            </Hidden>
          </ButtonBase>
        </li>
        <li className={classes.sideMenuListItem}>
          <ButtonBase className={classes.customIconButton} color="primary">
            <BookMark className={classes.customIcons} />
            <Hidden mdDown>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6">
                Закладки
              </Typography>
            </Hidden>
          </ButtonBase>
        </li>
        <li className={classes.sideMenuListItem}>
          <ButtonBase className={classes.customIconButton} color="primary">
            <SubjectIcon className={classes.customIcons} />
            <Hidden mdDown>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6">
                Список
              </Typography>
            </Hidden>
          </ButtonBase>
        </li>
        <li className={classes.sideMenuListItem}>
          <ButtonBase className={classes.customIconButton} color="primary">
            <PersonIcon className={classes.customIcons} />
            <Hidden mdDown>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6">
                Профиль
              </Typography>
            </Hidden>
          </ButtonBase>
        </li>
        <li>
          <Button
            className={classes.buttonTweet}
            variant="contained"
            color="primary"
            fullWidth>
            <Hidden mdDown>Твитнуть</Hidden>
            <Hidden lgUp>
              <CreateIcon />
            </Hidden>
          </Button>
        </li>
      </ul>
    </div>
  );
};
