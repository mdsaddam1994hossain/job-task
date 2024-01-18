import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  isAuthenticated: boolean;
 
}

const initialState: UserState = {
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state) => {
      state.isAuthenticated = true;
    },
    setLogout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { setLogin, setLogout } = userSlice.actions;
export default userSlice.reducer;
