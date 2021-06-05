import {
  Container,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MessageIcon from '@material-ui/icons/MailOutlineOutlined';
import BookMark from '@material-ui/icons/TurnedInNotOutlined';
import SubjectIcon from '@material-ui/icons/Subject';
import PersonIcon from '@material-ui/icons/PersonOutline';

export const useStylesHome = makeStyles((theme) => ({
  wrapper: {
    height: '100vh',
  },
  logo: { fontSize: 34 },

  customIconButton: {
    '&:hover ': {
      backgroundColor: 'rgba(29, 161, 242, 0.09)',
      color: theme.palette.primary.main,
    },
    overflow: 'hidden',
    borderRadius: 25,
    color: '#000',
  },

  customIcons: {
    height: 24,
    width: 24,
  },
  sideMenuList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  sideMenuListItemLabel: {
    paddingLeft: 15,
  },
}));

export const Home = () => {
  const classes = useStylesHome();

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <ul className={classes.sideMenuList}>
            <li>
              <IconButton color="primary">
                <TwitterIcon className={classes.logo} />
              </IconButton>
            </li>
            <li>
              <IconButton className={classes.customIconButton}>
                <i className={classes.customIcons}>#</i>
                <Typography
                  className={classes.sideMenuListItemLabel}
                  variant="h6">
                  Поиск
                </Typography>
              </IconButton>
            </li>
            <li>
              <IconButton className={classes.customIconButton} color="primary">
                <NotificationsNoneIcon className={classes.customIcons} />
                <Typography
                  className={classes.sideMenuListItemLabel}
                  variant="h6">
                  Уведомления
                </Typography>
              </IconButton>
            </li>
            <li>
              <IconButton className={classes.customIconButton} color="primary">
                <MessageIcon className={classes.customIcons} />
                <Typography
                  className={classes.sideMenuListItemLabel}
                  variant="h6">
                  Сообщения
                </Typography>
              </IconButton>
            </li>
            <li>
              <IconButton className={classes.customIconButton} color="primary">
                <BookMark className={classes.customIcons} />
                <Typography
                  className={classes.sideMenuListItemLabel}
                  variant="h6">
                  Закладки
                </Typography>
              </IconButton>
            </li>
            <li>
              <IconButton className={classes.customIconButton} color="primary">
                <SubjectIcon className={classes.customIcons} />
                <Typography
                  className={classes.sideMenuListItemLabel}
                  variant="h6">
                  Список
                </Typography>
              </IconButton>
            </li>
            <li>
              <IconButton className={classes.customIconButton} color="primary">
                <PersonIcon className={classes.customIcons} />
                <Typography
                  className={classes.sideMenuListItemLabel}
                  variant="h6">
                  Профиль
                </Typography>
              </IconButton>
            </li>
            <li></li>
          </ul>
        </Grid>
        <Grid item xs={6}>
          xs=7
        </Grid>
        <Grid item xs={3}>
          xs=4
        </Grid>
      </Grid>
    </Container>
  );
};
