import { createSlice } from '@reduxjs/toolkit';
import axios from 'src/utils/axios';

const initialState = {
  showColumns: false,
  deactivatedColumns: {},
  leftExpanded: false,
  rightExpanded: false
};

const slice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    toggleShowColumns(state, action) {
      state.showColumns = !state.showColumns;
    },
    setDeactivatedColumns(state, action) {
      console.log('action1:', action)
      state.deactivatedColumns = action.payload;
    },
    setLeftExpanded(state, action) {
      state.leftExpanded = !state.leftExpanded;
    },
    setRightExpanded(state, action) {
      state.rightExpanded = !state.rightExpanded;
    },
  }
});

export const reducer = slice.reducer;

export const toggleShowColumns = () => async (dispatch) => {
  dispatch(slice.actions.toggleShowColumns());
};
export const setDeactivatedColumns = (columns) => async (dispatch) => {
  dispatch(slice.actions.setDeactivatedColumns(columns));
};
export const setRightExpanded = () => async (dispatch) => {
  dispatch(slice.actions.setRightExpanded());
};
export const setLeftExpanded = () => async (dispatch) => {
  dispatch(slice.actions.setLeftExpanded());
};
export default slice;
