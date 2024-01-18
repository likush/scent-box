import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface AccountState {
  name: string;
}

const initialState: AccountState = {
  name: '',
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {changeName} = accountSlice.actions;

export default accountSlice.reducer;
