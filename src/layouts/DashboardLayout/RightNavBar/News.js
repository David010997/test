import React, {
  useRef,
  useCallback,
  useState,
  useEffect,
} from 'react';
import {
  Box,
  Typography,
  makeStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
  dragger: {
    width: "5px",
    cursor: "ns-resize",
    padding: "2px 0 0",
    borderTop: "1px solid #ddd",
    position: "absolute",
    bottom: 0,
    width: "100%",
    right: 0,
    left: 0,
    zIndex: 100,
    backgroundColor: "#f4f7f9"
  },
  scrollBar: {
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
  }
}));

const News = () => {
  const classes = useStyles();
  const ref = useRef(null);
  const [drawerWidth, setDrawerWidth] = React.useState(300);
  const [oldWidth, setOldWidth] = useState();
  const [offset, setOffset] = useState();
  let currentPos;
  const handleMouseDown = (e) => {
    console.log('moustmove1', e.clientY)
    // setCurrentPos(e.clientY);
    setOldWidth(drawerWidth);
    document.addEventListener("mouseup", handleMouseUp, true);
    document.addEventListener("mousemove", handleMouseMove, true);
  };

  const handleMouseUp = e => {
    console.log('moustmove2', e.clientX)
    document.removeEventListener("mouseup", handleMouseUp, true);
    document.removeEventListener("mousemove", handleMouseMove, true);
  };
  useEffect(() => {
    if (offset) {
      const newWidth = drawerWidth + offset * 1.5;
      if (newWidth < 500 && newWidth > 100) {
        setDrawerWidth(newWidth)
      }
    }
  }, [offset])
  const handleMouseMove = useCallback((e) => {
    // const newWidth = drawerWidth - (currentPos - e.clientY);
    // console.log('moustmove', drawerWidth, newWidth, currentPos, e.clientY, e)

    // if (newWidth > 100 && newWidth < 400) {
    //   setDrawerWidth(newWidth);
    // }
    console.log('moustmove2', e)
    setOffset(e.movementY)
  }, []);
  const news = [
    {
      content: '5 Under-the-Radar Tickers That Will Stomp the Market in 2021',
      author: 'The Motley Fool',
      postedAt: '2 hours'
    },
    {
      content: '7 tickers for fourth industrial revolution',
      author: 'Banyan Hill',
      postedAt: '13 hours'
    },
    {
      content: "US stocks upgraded to overweight by the world's largest asset manager on economic- growth outlook",
      author: 'Business Insider',
      postedAt: '2 days'
    },
    {
      content: 'Two retail stocks to watch ahead of their earnings reports this week',
      author: 'CNBC',
      postedAt: '1 week'
    },
    {
      content: 'Two retail stocks to watch ahead of their earnings reports this week',
      author: 'CNBC',
      postedAt: '1 week'
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
            News
          </Typography>
        </AccordionSummary>
        <AccordionDetails classes={{ root: classes.scrollBar }} style={{ height: drawerWidth }}>
          <Box>
            {news.map((item, index) => (
              <Box
                key={index}
                className={classes.row}
                p={1.5}
                mb={1.5}
              >
                <Typography variant="body2">
                  {item.content}
                </Typography>
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
          <div
            onMouseDown={(e) => handleMouseDown(e)}
            className={classes.dragger}
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default News;
