import React, { useState } from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import NavBar from './NavBar';
import RightNavBar from './RightNavBar';
import TopBar from './TopBar';
import { setLeftExpanded, setRightExpanded } from 'src/slices/main';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
  },
  leftExpanded: {
    paddingLeft: 70
  },
  leftCollapsed: {
    paddingLeft: 160
  },
  rightExpanded: {
    paddingRight: 0
  },
  rightCollapsed: {
    paddingRight: 308
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
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

const DashboardLayout = ({ children }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const setLeftExpandedAction = () => {
    dispatch(setLeftExpanded());
  }
  const setRightExpandedAction = () => {
    dispatch(setRightExpanded());
  }
  const { leftExpanded, rightExpanded } = useSelector((state) => state.main);

  return (
    <div className={classes.root}>
      <TopBar expanded={rightExpanded} setExpanded={setRightExpandedAction} />
      <NavBar
        expanded={leftExpanded}
        setExpanded={setLeftExpandedAction}
      />
      <div className={clsx(classes.wrapper, leftExpanded ? classes.leftCollapsed : classes.leftExpanded, rightExpanded ? classes.rightCollapsed : classes.rightExpanded)}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            {children}
          </div>
        </div>
      </div>
      {rightExpanded &&
        <RightNavBar />
      }
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node
};

export default DashboardLayout;
