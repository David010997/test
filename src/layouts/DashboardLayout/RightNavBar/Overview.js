import React, {
  useRef,
  useState
} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import {
  Avatar,
  Box,
  ButtonBase,
  Hidden,
  Menu,
  MenuItem,
  Typography,
  makeStyles,
} from '@material-ui/core';
import useAuth from 'src/hooks/useAuth';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: 4,
    background: theme.palette.background.dark,
  },
  variance: {
    background: theme.palette.background.dark_inner,
    borderRadius: 4,
  },
  varianceIcon: {
    marginRight: 8
  },
  total: {
    marginRight: 16
  },
  companyLogo: {
    marginRight: 8
  }
}));

const Overview = () => {
  const classes = useStyles();
  const ref = useRef(null);

  return (
    <Box
      className={classes.container}
      p={1.5}
      mb={1}
    >
      <Box
        display="flex"
        alignItems="center"
      >
        <div className={classes.companyLogo}>
          <img src="/static/images/cps.svg" />
        </div>
        <div>
          <Typography variant="h4">
            CPSH
        </Typography>
          <Typography variant="body2" color="textSecondary">
            CPS Technologies Corporation
        </Typography>
        </div>
      </Box>
      <Box
        display="flex"
        alignItems="baseline"
        className={classes.variance}
        p={1.5}
        mt={1.5}
      >
        <ArrowUpwardIcon color="secondary" className={classes.varianceIcon} />
        <Typography variant="h1" color="secondary" className={classes.total}>2.72</Typography>
        <Typography variant="body2" color="secondary" mr={1}>
          +45.94
        </Typography>
      </Box>
    </Box>
  );
}

export default Overview;
