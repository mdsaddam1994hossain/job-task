import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../../types/Users';



const initialState: UserState = {
  isAuthenticated: false,
  user: null
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
