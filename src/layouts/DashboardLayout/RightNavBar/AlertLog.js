import React, {
  useRef, useState
} from 'react';
import {
  Box,
  Typography,
  makeStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
    maxHeight: 300,
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
  }
}));

const AlertLog = () => {
  const classes = useStyles();
  const ref = useRef(null);
  const [filter, setFilter] = useState('all');
  const alerts = [
    {
      content: 'High of the Day Breakout',
      author: 'CBAT',
      type: 'price',
      postedAt: 'just now'
    },
    {
      content: 'Volume 3x Average Volume',
      author: 'PRTH',
      type: 'change',
      postedAt: '5 min'
    },
    {
      content: 'High of the Day Breakout',
      author: 'CBAT',
      type: 'price',
      postedAt: 'just now'
    },
    {
      content: 'Volume 3x Average Volume',
      author: 'PRTH',
      type: 'change',
      postedAt: '5 min'
    },
    {
      content: 'High of the Day Breakout',
      author: 'CBAT',
      type: 'price',
      postedAt: 'just now'
    },
    {
      content: 'Volume 3x Average Volume',
      author: 'PRTH',
      type: 'change',
      postedAt: '5 min'
    },
  ]
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
            <img src="/static/images/news_icon.svg" />
          </div>
          <Typography variant="body2">
            Alert Log
          </Typography>
        </AccordionSummary>
        <AccordionDetails classes={{ root: classes.scrollBar }}>
          <Box width="100%">
            <Box
              display="flex"
              alignItems="end"
              justifyContent="space-between"
              mb={1}
            >
              {Object.keys(icons).map((key, index) => (
                <Button
                  variant={filter === key ? "contained" : "text"}
                  color="primary"
                  key={index}
                  className={classes.marginRight}
                  startIcon={filter === key ? <img src={icons[key].inactive} /> : <img src={icons[key].inactive} />}
                  onClick={() => setFilter(key)}
                  classes={{ root: classes.iconButton, startIcon: classes.startIcon }}
                >
                </Button>

              ))}
            </Box>
            {alerts.filter(item => filter === 'all' || item.type === filter).map((item, index) => (
              <Box
                key={index}
                className={classes.row}
                p={1.5}
                mb={1.5}
              >
                <Box
                  display="flex"
                  alignItems="end"
                  justifyContent="space-between"
                  mt={1}
                >
                  <Typography variant="body2">
                    {item.content}
                  </Typography>
                  <div>
                    <img src={icons[item.type].inactive} />
                  </div>
                </Box>
                <Box
                  display="flex"
                  alignItems="baseline"
                  justifyContent="space-between"
                  mt={1}
                >
                  <Typography variant="body2" color="textSecondary">
                    {item.author}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item.postedAt}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default AlertLog;
