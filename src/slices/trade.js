import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {
  list: [],
  arr: [],
  isFetching:true
};

const slice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    getCompaniesList(state, action) {
      const list = action.payload;
      state.list = list;
    },
    getTypes(state, action) {
      const types = action.payload
      state.types = types
    },
    addTypes(state, action) {
      const { types } = action.payload
      state.arr = types
    },
    ToggleIsFetching(state,action) {
      const isFetching = action.payload
      state.isFetching = isFetching
    }
  }
});

export const reducer = slice.reducer;

//  const ToggleIsFetching = () => (dispatch) => {
//   dispatch(slice.actions.ToggleIsFetching());
// }

export const addTypes = (arr) => (dispatch) => {
  dispatch(slice.actions.addTypes(arr));
}

export const getTypes = () => async (dispatch) => {
  try {
    const response = await axios.get('http://94.130.65.171:5000/trades/types');
    let types = response.data.types;
    let typeIndex1 = types.findIndex(i => i === "x_4");
    let spliced1 = types.splice(typeIndex1, 1)
    let typeIndex2 = types.findIndex(i => i === "vr_4");
    let spliced2 = types.splice(typeIndex2, 1)
    types = [...spliced1, ...spliced2, ...types]
    dispatch(slice.actions.getTypes(types));
  }
  catch (err) {
    console.log(err.name);
  }

};
const getDate = () => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;
  return today;
};

export const getCompaniesList = (arr) => async (dispatch) => {
  try {
    const today = getDate();
    dispatch(slice.actions.ToggleIsFetching(true))
    const response = await axios.get(`http://94.130.65.171:5000/trades/categorized?date=2021-01-15&types=${arr.length ? arr.join(",") : 0}`);
    dispatch(slice.actions.getCompaniesList(response.data));
    dispatch(slice.actions.ToggleIsFetching(false))
  }
  catch (err) {
    console.log(err.name);
  }

};



export default slice;


