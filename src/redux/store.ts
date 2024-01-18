import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducer/userSlice";
import { apiSlice } from "./reducer/apiSlice";


const store = configureStore({
  reducer: {
    user: userSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
    
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware)
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;