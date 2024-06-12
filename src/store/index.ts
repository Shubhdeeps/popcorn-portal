import { configureStore } from "@reduxjs/toolkit";
import mediaReducer from "./media/media.slice";
import searchReducer from "./search/search.slice";
const store = configureStore({
  reducer: {
    media: mediaReducer,
    search: searchReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
