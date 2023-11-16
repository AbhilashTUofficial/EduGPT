import {createSlice} from '@reduxjs/toolkit';

const appStateSlice = createSlice({
  name: 'appReducer',
  initialState: {
    value: true,
  },

  reducers: {
    functionName: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {functionName} = appStateSlice.actions;

export default appStateSlice.reducer;
