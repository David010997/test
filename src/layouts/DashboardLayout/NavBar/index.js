/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  makeStyles,
  IconButton,
  Toolbar
} from '@material-ui/core';
import Logo from 'src/components/Logo';
import useAuth from 'src/hooks/useAuth';
import NavItem from './NavItem';

const TickersIcon = '/static/images/tickers_icon_white.svg';
const AccountIcon = '/static/images/account_icon.svg';
const ConfigurationIcon = '/static/images/configuration_icon.svg';
const PricingIcon = '/static/images/pricing_icon.svg';
const WatchlistsIcon = '/static/images/watchlists_icon.svg';
const CloseIcon = '/static/images/cross.svg';
const HamburgerIcon = '/static/images/hamburger_menu.svg';

const sections = [
  {
    subheader: 'Reports',
    items: [
      {
        title: 'Tickers',
        icon: TickersIcon,
        href: '/app'
      },
      {
        title: 'Watchlists',
        icon: WatchlistsIcon,
        href: '/'
      },
      {
        title: 'Configuration',
        icon: ConfigurationIcon,
        href: '/'
      }
    ]
  },
  {
    subheader: 'Management',
    items: [
      {
        title: 'Account',
        icon: AccountIcon,
        href: '/',
      },
      {
        title: 'Prices & billing',
        icon: PricingIcon,
        href: '/',
      },
    ]
  },
];

function renderNavItems({
  items,
  pathname,
  depth = 0,
  expanded = false
}) {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, pathname, depth, expanded }),
        []
      )}
    </List>
  );
}

function reduceChildRoutes({
  acc,
  pathname,
  item,
  depth,
  expanded
}) {
  const key = item.title + depth;
  acc.push(
    <NavItem
      depth={depth}
      href={item.href}
      icon={item.icon}
      info={item.info}
      key={key}
      title={expanded ? item.title : ''}
    />
  );

  return acc;
}

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  expandDrawer: {
    width: 160,
    zIndex: 10000
    // top: 64,
    // height: 'calc(100% - 64px)'
  },
  collapseDrawer: {
    width: 70,
    zIndex: 10000
    // top: 64,
    // height: 'calc(100% - 64px)'
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
  }
}));

const NavBar = ({ expanded, setExpanded }) => {
  const classes = useStyles();
  const location = useLocation();
  const { user } = useAuth();

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <Toolbar className={classes.toolbar}>
          <RouterLink to="/">
            <Logo />
          </RouterLink>
          <IconButton
            color="inherit"
            className={classes.toggle}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ?
              <img src={CloseIcon}/>
              :
              <img src={HamburgerIcon} />
            }
          </IconButton>
        </Toolbar>
        <Box p={1}>
          {sections.map((section, index) => (
            <>
              <List
                key={section.subheader}
              >
                {renderNavItems({
                  items: section.items,
                  pathname: location.pathname,
                  expanded
                })}
              </List>
              {index < sections.length - 1 &&
                <Divider />
              }
            </>
          ))}
        </Box>
      </PerfectScrollbar>
    </Box>
  );

  return (
    <>
      <Drawer
        anchor="left"
        classes={{ paper: expanded ? classes.expandDrawer : classes.collapseDrawer }}
        open
        variant="persistent"
      >
        {content}
      </Drawer>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default NavBar;
