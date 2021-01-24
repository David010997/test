import React, {
  useEffect,
  useRef, useState
} from 'react';
import {
  Box,
  Typography,
  makeStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { addTypes, getCompaniesList, getTypes } from 'src/slices/trade';
import { useDispatch, useSelector } from 'src/store';
const icons = {
  all: {
    'active': '/static/images/all_small.svg',
    'inactive': '/static/images/all_small_white.svg',
  },
  price: {
    'active': '/static/images/price_br_small.svg',
    'inactive': '/static/images/price_br_small_white.svg',
  },
  volume: {
    'active': '/static/images/volume_br_small.svg',
    'inactive': '/static/images/volume_br_small_white.svg',
  },
  change: {
    'active': '/static/images/change_br_small.svg',
    'inactive': '/static/images/change_br_small_white.svg',
  },
  sweep: {
    'active': '/static/images/sweep_small.svg',
    'inactive': '/static/images/sweep_small_white.svg',
  },
  dark: {
    'active': '/static/images/dark_small.svg',
    'inactive': '/static/images/dark_small_white.svg',
  },
  order: {
    'active': '/static/images/order_small.svg',
    'inactive': '/static/images/order_small_white.svg',
  },
};

const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: 4,
    background: theme.palette.background.dark,
  },
  row: {
    background: theme.palette.background.dark_inner,
    borderRadius: 4,
  },
  varianceIcon: {
    marginRight: 8
  },
  total: {
    marginRight: 16
  },
  sectionIcon: {
    marginRight: 8
  },
  scrollBar: {
    maxHeight: 350,
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: 2
    },
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.scrollBar.main,
      borderRadius: 8
      // outline: '1px solid slategrey'
    }
  },
  iconButton: {
    padding: 8,
    minWidth: 32
  },
  startIcon: {
    margin: 0
  },
  column: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 0
  },
  label: {
    color: "#68759C",
    fontSize: 12,
  },
  checkbox: {
    padding: 5
  }
}));

const Columns = ({ deactivatedColumns, setDeactivatedColumns }) => {
  const classes = useStyles();
  const ref = useRef(null);
  let { types } = useSelector((state) => state.trade);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypes())
  }, [dispatch]);

  const columns = types && types.map(t => (
    {
      label: t,
      key: t
    }
  ))
  let defaultCheckedValues = columns && [columns[0], columns[1]]
  // const columns = [
  //   {
  //     label: 'Ticker',
  //     key: 'ticker'
  //   },
  //   {
  //     label: 'Name',
  //     key: 'name'
  //   },
  //   {
  //     label: 'Price',
  //     key: 'price'
  //   },
  //   {
  //     label: 'Change % (PD)',
  //     key: 'change_pd'
  //   },
  //   {
  //     label: 'Change % (1m)',
  //     key: 'change_1m'
  //   },
  //   {
  //     label: 'Volume (D)',
  //     key: 'volume_d'
  //   },
  //   {
  //     label: 'Volume',
  //     key: 'volume'
  //   },
  //   {
  //     label: 'Price BD',
  //     key: 'price_bd'
  //   },
  //   {
  //     label: 'Volume BD',
  //     key: 'volume_bd'
  //   },
  //   {
  //     label: 'Alerts',
  //     key: 'alerts'
  //   },
  // ];
  
  const onChecked =  (key) => {
    let arr = JSON.parse(localStorage.getItem('types'));
    // let newColumns = { ...deactivatedColumns };
    // // console.log(deactivatedColumns)
    // if (newColumns[key]) {
    //   newColumns[key] = !newColumns[key];
    // }
    // else {
    //   newColumns[key] = true;
    // }
    // setDeactivatedColumns(newColumns);

    let index = arr.findIndex(i => i === key)
    if (arr.includes(key)) {
      arr.splice(index, 1)
    }
    else {
      arr.push(key)
    }
    localStorage.setItem("types", JSON.stringify(arr));
    dispatch(getCompaniesList(arr)) 
  }


  return (
    <Box
      className={classes.container}
      p={1.5}
      mb={1}
    >
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={classes.sectionIcon}>
            <img src="/static/images/columns.svg" />
          </div>
          <Typography variant="body2">
            Columns
          </Typography>
        </AccordionSummary>
        <AccordionDetails classes={{ root: classes.scrollBar }}>
          <Box width="100%">
            {columns && columns.map((column, index) => (
              <FormControlLabel
                value="start"
                control={<Checkbox classes={{ root: classes.checkbox }} color="primary" size="small" defaultChecked={(column.key === "x_4") ? true : (column.key === "vr_4") ? true : false} onClick={() => onChecked(column.key)} />}
                label={column.label}
                labelPlacement="start"
                classes={{ root: classes.column, label: classes.label }}
              />
            ))}

          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default Columns;
