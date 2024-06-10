import { configureStore } from "@reduxjs/toolkit";
import mediaReducer from "./media/media.slice";
const store = configureStore({
  reducer: {
    media: mediaReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
