import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  TextField,
  InputAdornment,
  Button
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {},
  action: {
    marginBottom: theme.spacing(1),
    '& + &': {
      marginLeft: theme.spacing(1)
    }
  },
  medium: {
    background: theme.palette.background.default,
    minWidth: 300
  },
  background: {
    background: theme.palette.background.default
  },
  inactiveButton: {
    background: theme.palette.background.dark_inner,
    color: theme.palette.text.secondary,
    textTransform: 'none'
  },
  iconButton: {
    padding: 8,
    minWidth: 32
  },
  startIcon: {
    margin: 0
  },
  button: {
    textTransform: 'none'
  }
}));
const COLUMNS_ICON = '/static/images/columns.svg';
const COLUMNS_ICON_WHITE = '/static/images/columns_white.svg';

const BottomBar = ({ className, frequency, setFrequency, ...rest }) => {
  const classes = useStyles();
  const list = [
    { label: "1 m", value: 1 },
    { label: "5 m", value: 5 },
    { label: "15 m", value: 15 },
    { label: "30 m", value: 30 },
    { label: "1 h", value: 60 },
    { label: "1 d", value: 1440 },
    { label: "1 w", value: 10080 },
  ];
  return (
    <Box display="flex"
      alignItems="center" justifyContent="center">
      {list.map((item, index) => (
        <Box mr={1} key={index}>
          <Button variant="contained" color={frequency === item.value ? "primary" : "default"} onClick={() => setFrequency(item.value)} classes={{ root: frequency !== item.value ? classes.inactiveButton : classes.button }}>
            {item.label}
          </Button>
        </Box>
      ))}
    </Box>
  );
};

BottomBar.propTypes = {
  className: PropTypes.string
};

export default BottomBar;
