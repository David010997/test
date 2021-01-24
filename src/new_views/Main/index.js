import React, {
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useState
} from 'react';
import isEqual from "lodash/isEqual";
import {
  Box,
  Container,
  makeStyles,
  AppBar,
  Tab,
  Tabs
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import { toggleShowColumns } from 'src/slices/main';
import Page from 'src/components/Page';
import Header from './Header';
import BottomBar from './BottomBar';
import Results from './Results';
import { changeTitle, addTableData } from 'src/slices/tabs';
let EnhancedTable = lazy(() => import('./EnhancedTable'));

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark_inner,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(3)
  },
  topBar: {
    backgroundColor: theme.palette.background.dark_inner,
    boxShadow: "none",
    padding: "10px 0"
  },
  bottomBar: {
    backgroundColor: theme.palette.background.dark_inner,
    top: 'auto',
    bottom: 0,
    boxShadow: "none",
    padding: "10px 0"
  },
  tabs: {
    marginBottom: 20
  }
}));
const orders = [
  {
    ticker: 'CBAT',
    name: 'CBAK Energy Technology Inc.',
    price: 6.15,
    change_pd: 54.91,
    change_1m: 7.15,
    volume_d: 92887702,
    volume: 11201279,
    price_bd: -1,
    volume_bd: 0,
    alerts: 16,
    type: 1
  },
  {
    ticker: 'APWC',
    name: 'Asia Pacific Wire & Cable Corporation',
    price: 1.95,
    change_pd: 47.72,
    change_1m: 5.19,
    volume_d: 29236597,
    volume: 3133703,
    price_bd: 5,
    volume_bd: 10,
    alerts: 9,
    type: 1
  },
  {
    ticker: 'NHLD',
    name: 'National Holdings Corporation',
    price: 2.72,
    change_pd: 2.72,
    change_1m: 2.39,
    volume_d: 1604525,
    volume: 11201279,
    price_bd: 40,
    volume_bd: 9,
    alerts: 9,
    type: 1
  },
  {
    ticker: 'SOLO',
    name: 'Electrameccanica Vehicles Corp',
    price: 6.29,
    change_pd: 30.22,
    change_1m: 9.22,
    volume_d: 1705365,
    volume: 294902,
    price_bd: 47,
    volume_bd: 1,
    alerts: 9,
    type: 1
  },
  {
    ticker: 'CBAT',
    name: 'CBAK Energy Technology Inc.',
    price: 6.15,
    change_pd: 54.91,
    change_1m: 7.15,
    volume_d: 92887702,
    volume: 11201279,
    price_bd: -1,
    volume_bd: 0,
    alerts: 16,
    type: 1
  },
  {
    ticker: 'APWC',
    name: 'Asia Pacific Wire & Cable Corporation',
    price: 1.95,
    change_pd: 47.72,
    change_1m: 5.19,
    volume_d: 29236597,
    volume: 3133703,
    price_bd: 5,
    volume_bd: 10,
    alerts: 9,
    type: 1

  },
  {
    ticker: 'NHLD',
    name: 'National Holdings Corporation',
    price: 2.72,
    change_pd: 2.72,
    change_1m: 2.39,
    volume_d: 1604525,
    volume: 11201279,
    price_bd: 40,
    volume_bd: 9,
    alerts: 9,
    type: 1
  },
  {
    ticker: 'SOLO',
    name: 'Electrameccanica Vehicles Corp',
    price: 6.29,
    change_pd: 30.22,
    change_1m: 9.22,
    volume_d: 1705365,
    volume: 294902,
    price_bd: 47,
    volume_bd: 1,
    alerts: 9,
    type: 1
  },
  {
    ticker: 'CBAT',
    name: 'CBAK Energy Technology Inc.',
    price: 6.15,
    change_pd: 54.91,
    change_1m: 7.15,
    volume_d: 92887702,
    volume: 11201279,
    price_bd: -1,
    volume_bd: 0,
    alerts: 16,
    type: 1
  },
  {
    ticker: 'APWC',
    name: 'Asia Pacific Wire & Cable Corporation',
    price: 1.95,
    change_pd: 47.72,
    change_1m: 5.19,
    volume_d: 29236597,
    volume: 3133703,
    price_bd: 5,
    volume_bd: 10,
    alerts: 9,
    type: 0

  },
  {
    ticker: 'NHLD',
    name: 'National Holdings Corporation',
    price: 2.72,
    change_pd: 2.72,
    change_1m: 2.39,
    volume_d: 1604525,
    volume: 11201279,
    price_bd: 40,
    volume_bd: 9,
    alerts: 9,
    type: 0
  },
  {
    ticker: 'SOLO',
    name: 'Electrameccanica Vehicles Corp',
    price: 6.29,
    change_pd: 30.22,
    change_1m: 9.22,
    volume_d: 1705365,
    volume: 294902,
    price_bd: 47,
    volume_bd: 1,
    alerts: 9,
    type: 0
  },
  {
    ticker: 'APWC',
    name: 'Asia Pacific Wire & Cable Corporation',
    price: 1.95,
    change_pd: 47.72,
    change_1m: 5.19,
    volume_d: 29236597,
    volume: 3133703,
    price_bd: 5,
    volume_bd: 10,
    alerts: 9,
    type: 0

  },
  {
    ticker: 'NHLD',
    name: 'National Holdings Corporation',
    price: 2.72,
    change_pd: 2.72,
    change_1m: 2.39,
    volume_d: 1604525,
    volume: 11201279,
    price_bd: 40,
    volume_bd: 9,
    alerts: 9,
    type: 0
  },
  {
    ticker: 'SOLO',
    name: 'Electrameccanica Vehicles Corp',
    price: 6.29,
    change_pd: 30.22,
    change_1m: 9.22,
    volume_d: 1705365,
    volume: 294902,
    price_bd: 47,
    volume_bd: 1,
    alerts: 9,
    type: 0
  },
  {
    ticker: 'APWC',
    name: 'Asia Pacific Wire & Cable Corporation',
    price: 1.95,
    change_pd: 47.72,
    change_1m: 5.19,
    volume_d: 29236597,
    volume: 3133703,
    price_bd: 5,
    volume_bd: 10,
    alerts: 9,
    type: 0

  },
  {
    ticker: 'NHLD',
    name: 'National Holdings Corporation',
    price: 2.72,
    change_pd: 2.72,
    change_1m: 2.39,
    volume_d: 1604525,
    volume: 11201279,
    price_bd: 40,
    volume_bd: 9,
    alerts: 9,
    type: 0
  },
  {
    ticker: 'SOLO',
    name: 'Electrameccanica Vehicles Corp',
    price: 6.29,
    change_pd: 30.22,
    change_1m: 9.22,
    volume_d: 1705365,
    volume: 294902,
    price_bd: 47,
    volume_bd: 1,
    alerts: 9,
    type: 0
  },
  {
    ticker: 'APWC',
    name: 'Asia Pacific Wire & Cable Corporation',
    price: 1.95,
    change_pd: 47.72,
    change_1m: 5.19,
    volume_d: 29236597,
    volume: 3133703,
    price_bd: 5,
    volume_bd: 10,
    alerts: 9,
    type: 0

  },
  {
    ticker: 'NHLD',
    name: 'National Holdings Corporation',
    price: 2.72,
    change_pd: 2.72,
    change_1m: 2.39,
    volume_d: 1604525,
    volume: 11201279,
    price_bd: 40,
    volume_bd: 9,
    alerts: 9,
    type: 0
  },
  {
    ticker: 'SOLO',
    name: 'Electrameccanica Vehicles Corp',
    price: 6.29,
    change_pd: 30.22,
    change_1m: 9.22,
    volume_d: 1705365,
    volume: 294902,
    price_bd: 47,
    volume_bd: 1,
    alerts: 9,
    type: 0
  },
  {
    ticker: 'APWC',
    name: 'Asia Pacific Wire & Cable Corporation',
    price: 1.95,
    change_pd: 47.72,
    change_1m: 5.19,
    volume_d: 29236597,
    volume: 3133703,
    price_bd: 5,
    volume_bd: 10,
    alerts: 9,
    type: 0

  },
  {
    ticker: 'NHLD',
    name: 'National Holdings Corporation',
    price: 2.72,
    change_pd: 2.72,
    change_1m: 2.39,
    volume_d: 1604525,
    volume: 11201279,
    price_bd: 40,
    volume_bd: 9,
    alerts: 9,
    type: 0
  },
  {
    ticker: 'SOLO',
    name: 'Electrameccanica Vehicles Corp',
    price: 6.29,
    change_pd: 30.22,
    change_1m: 9.22,
    volume_d: 1705365,
    volume: 294902,
    price_bd: 47,
    volume_bd: 1,
    alerts: 9,
    type: 0
  },
  {
    ticker: 'APWC',
    name: 'Asia Pacific Wire & Cable Corporation',
    price: 1.95,
    change_pd: 47.72,
    change_1m: 5.19,
    volume_d: 29236597,
    volume: 3133703,
    price_bd: 5,
    volume_bd: 10,
    alerts: 9,
    type: 0

  },
  {
    ticker: 'NHLD',
    name: 'National Holdings Corporation',
    price: 2.72,
    change_pd: 2.72,
    change_1m: 2.39,
    volume_d: 1604525,
    volume: 11201279,
    price_bd: 40,
    volume_bd: 9,
    alerts: 9,
    type: 0
  },
  {
    ticker: 'SOLO',
    name: 'Electrameccanica Vehicles Corp',
    price: 6.29,
    change_pd: 30.22,
    change_1m: 9.22,
    volume_d: 1705365,
    volume: 294902,
    price_bd: 47,
    volume_bd: 1,
    alerts: 9,
    type: 0
  },
  {
    ticker: 'APWC',
    name: 'Asia Pacific Wire & Cable Corporation',
    price: 1.95,
    change_pd: 47.72,
    change_1m: 5.19,
    volume_d: 29236597,
    volume: 3133703,
    price_bd: 5,
    volume_bd: 10,
    alerts: 9,
    type: 0

  },
  {
    ticker: 'NHLD',
    name: 'National Holdings Corporation',
    price: 2.72,
    change_pd: 2.72,
    change_1m: 2.39,
    volume_d: 1604525,
    volume: 11201279,
    price_bd: 40,
    volume_bd: 9,
    alerts: 9,
    type: 0
  },
  {
    ticker: 'SOLO',
    name: 'Electrameccanica Vehicles Corp',
    price: 6.29,
    change_pd: 30.22,
    change_1m: 9.22,
    volume_d: 1705365,
    volume: 294902,
    price_bd: 47,
    volume_bd: 1,
    alerts: 9,
    type: 0
  },
  {
    ticker: 'APWC',
    name: 'Asia Pacific Wire & Cable Corporation',
    price: 1.95,
    change_pd: 47.72,
    change_1m: 5.19,
    volume_d: 29236597,
    volume: 3133703,
    price_bd: 5,
    volume_bd: 10,
    alerts: 9,
    type: 0

  },
  {
    ticker: 'NHLD',
    name: 'National Holdings Corporation',
    price: 2.72,
    change_pd: 2.72,
    change_1m: 2.39,
    volume_d: 1604525,
    volume: 11201279,
    price_bd: 40,
    volume_bd: 9,
    alerts: 9,
    type: 0
  },
  {
    ticker: 'SOLO',
    name: 'Electrameccanica Vehicles Corp',
    price: 6.29,
    change_pd: 30.22,
    change_1m: 9.22,
    volume_d: 1705365,
    volume: 294902,
    price_bd: 47,
    volume_bd: 1,
    alerts: 9,
    type: 0
  },
  {
    ticker: 'APWC',
    name: 'Asia Pacific Wire & Cable Corporation',
    price: 1.95,
    change_pd: 47.72,
    change_1m: 5.19,
    volume_d: 29236597,
    volume: 3133703,
    price_bd: 5,
    volume_bd: 10,
    alerts: 9,
    type: 0

  },
  {
    ticker: 'NHLD',
    name: 'National Holdings Corporation',
    price: 2.72,
    change_pd: 2.72,
    change_1m: 2.39,
    volume_d: 1604525,
    volume: 11201279,
    price_bd: 40,
    volume_bd: 9,
    alerts: 9,
    type: 0
  },
  {
    ticker: 'SOLO',
    name: 'Electrameccanica Vehicles Corp',
    price: 6.29,
    change_pd: 30.22,
    change_1m: 9.22,
    volume_d: 1705365,
    volume: 294902,
    price_bd: 47,
    volume_bd: 1,
    alerts: 9,
    type: 0
  },
  {
    ticker: 'APWC',
    name: 'Asia Pacific Wire & Cable Corporation',
    price: 1.95,
    change_pd: 47.72,
    change_1m: 5.19,
    volume_d: 29236597,
    volume: 3133703,
    price_bd: 5,
    volume_bd: 10,
    alerts: 9,
    type: 0

  },
  {
    ticker: 'NHLD',
    name: 'National Holdings Corporation',
    price: 2.72,
    change_pd: 2.72,
    change_1m: 2.39,
    volume_d: 1604525,
    volume: 11201279,
    price_bd: 40,
    volume_bd: 9,
    alerts: 9,
    type: 0
  },
  {
    ticker: 'SOLO',
    name: 'Electrameccanica Vehicles Corp',
    price: 6.29,
    change_pd: 30.22,
    change_1m: 9.22,
    volume_d: 1705365,
    volume: 294902,
    price_bd: 47,
    volume_bd: 1,
    alerts: 9,
    type: 0
  },
];
const getTableWidth = (width, leftExpanded, rightExpanded) => {
  let exactWidth = width - 52;
  if (leftExpanded) {
    exactWidth -= 160;
  }
  else {
    exactWidth -= 70;
  }
  if (rightExpanded) {
    exactWidth -= 308;
  }
  else {
    exactWidth -= 0;
  }
  return exactWidth;
}
const MainView = () => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const { showColumns, deactivatedColumns, leftExpanded, rightExpanded } = useSelector((state) => state.main);
  const { tabs } = useSelector((state) => state.tabs);

  const [sortOrder, setSortOrder] = useState(true);
  const [frequency, setFrequency] = useState(1)
  const [tab, setTab] = useState(undefined);
  const [previousTabs, setPreviousTabs] = useState(tabs);

  const dispatch = useDispatch();
  const toggleShowColumnsAction = () => {
    dispatch(toggleShowColumns());
  }

  const selectedTab = tabs.find(tab => tab.selected === true);

  const handleChangeType = (e, value) => {
    setTab(value);

    const selectedTabId = tabs.find(tab => tab.selected === true).id;
    const title = value === 0 ? "Breakouts" : "Trade History";

    dispatch(changeTitle(selectedTabId, title));
    // dispatch(addTableData(selectedTabId, orders));
  }

  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowSize;
  }

  useEffect(() => {
    if (!isEqual(previousTabs, tabs) && previousTabs.length < tabs.length) {
      setTab(undefined);
      setPreviousTabs(tabs)
    }
  })

  const size = useWindowSize();
  const exactWidth = getTableWidth(size.width, leftExpanded, rightExpanded);
  console.log('size1', exactWidth)
  return (
    <Page
      className={classes.root}
      title="Main"
    >
      <Container maxWidth={false}>
        {tab === undefined &&
          <Tabs className={classes.tabs} textColor="primary" value={tab} onChange={handleChangeType}>
            <Tab label="Breakouts" />
            <Tab label="Trade history" />
          </Tabs>
        }

        {tab !== undefined && <>
          <AppBar position="sticky" color="inherit" className={classes.topBar}>
            <Header sortOrder={sortOrder} setSortOrder={setSortOrder} toggleShowColumns={toggleShowColumnsAction} showColumns={showColumns} setFrequency={setFrequency} frequency={frequency} />
          </AppBar>
          <Box mt={1}>
            {/* <Results orders={orders} /> */}
            <Suspense fallback={<div>Loading...</div>}>
              {exactWidth &&
                <EnhancedTable stockData={orders} exactWidth={exactWidth} deactivatedColumns={deactivatedColumns} />
              }
            </Suspense>
          </Box>
          <AppBar position="sticky" color="inherit" className={classes.bottomBar}>
            <BottomBar setFrequency={setFrequency} frequency={frequency} />
          </AppBar>
        </>}
      </Container>
    </Page>
  );
};

export default MainView;
