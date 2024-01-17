import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducer/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;