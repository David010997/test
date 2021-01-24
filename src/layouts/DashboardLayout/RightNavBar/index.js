/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import {
  Box,
  Drawer,
  makeStyles,
} from '@material-ui/core';
import useAuth from 'src/hooks/useAuth';
import Overview from './Overview';
import News from './News';
import AlertLog from './AlertLog';
import Columns from './Columns';
import { setDeactivatedColumns } from 'src/slices/main';

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 256
  },
  drawer: {
    width: 308,
    zIndex: 10000,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  },
  toolbar: {
    minHeight: 64,
    paddingLeft: 12
  },
  toggle: {
    right: 0,
    position: "absolute"
  },
  scrollBar: {
    '&::-webkit-scrollbar': {
      width: 4,
    },
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.scrollBar.main,
      borderRadius: 8
      // outline: '1px solid slategrey'
    }
  }
}));

const RightNavBar = () => {
  const classes = useStyles();
  const location = useLocation();
  const { user } = useAuth();
  const { showColumns, deactivatedColumns } = useSelector((state) => state.main);
  const dispatch = useDispatch();
  const setDeactivatedColumnsAction = columns => {
    dispatch(setDeactivatedColumns(columns));
  }
  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      className={classes.scrollBar}
    >
      <PerfectScrollbar className={classes.scrollBar} options={{ suppressScrollX: true }}>
        <Box p={1}>
          {showColumns &&
            <Columns deactivatedColumns={deactivatedColumns} setDeactivatedColumns={setDeactivatedColumnsAction} />
          }
          <Overview />
          <News />
          <AlertLog />
        </Box>
      </PerfectScrollbar>
    </Box>
  );

  return (
    <>
      <Drawer
        anchor="right"
        classes={{ paper: classes.drawer }}
        open
        variant="persistent"
      >
        {content}
      </Drawer>
    </>
  );
};

RightNavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default RightNavBar;
