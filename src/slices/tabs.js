import { createSlice } from '@reduxjs/toolkit';
import axios from 'src/utils/axios';
import objFromArray from 'src/utils/objFromArray';

const initialState = {
  tabs: [{
    id: 1,
    selected: true,
    title: 'New tab',
    tableData: undefined
  }],
};

const slice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    addTab(state, action) {
        const tabs = [ ...state.tabs ];

        tabs.forEach(tab => {tab.selected = false})
        tabs.push(action.payload);

        state.tabs = tabs;
    },
    removeTab(state, action) {
        const newTabs = state.tabs.filter(tab => tab.id !== action.payload).map((tab, i) => ({...tab, id: i+1}));

        if (action.payload === state.tabs[state.tabs.length - 1].id) {
            newTabs[newTabs.length - 1].selected = true;
        };

        state.tabs = newTabs;
    },
    changeTitle(state, action) {
        const duplicatedTabs = [...state.tabs];
        duplicatedTabs.find(tab => tab.id === action.payload.id).title = action.payload.title;

        state.tabs = duplicatedTabs;
    },
    
    changeSelectedTab(state, action) {
        state.tabs = state.tabs.map(tab => {
            if (tab.id === action.payload) {
                return {
                    ...tab,
                    selected: true
                }
            };

            return {
                ...tab,
                selected: false
            }
        })      
    },

    addTableData(state, action) {
        const dubleTabs = [...state.tabs];

        dubleTabs.find(tab => (tab.id === action.payload.id)).tableData = action.payload.tableData;
        
        state.tabs = dubleTabs;
    }
  }
});

export const reducer = slice.reducer;

export const addTab = (count) => async (dispatch) => {  
    dispatch(slice.actions.addTab({
        id: count + 1,
        selected: true,
        title: 'New tab'
    }));
  };  

export const removeTab = (id) => async (dispatch) => {
    dispatch(slice.actions.removeTab(id));
};

export const changeTitle = (id, title) => async (dispatch) => {
    dispatch(slice.actions.changeTitle({ id, title }));
};

export const changeSelectedTab = (id) => async (dispatch) => {
    dispatch(slice.actions.changeSelectedTab(id));
};

export const addTableData = (id, tableData) => async (dispatch) => {
    dispatch(slice.actions.addTableData({ id, tableData }))
};

export default slice;
