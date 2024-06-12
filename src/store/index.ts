import { configureStore } from "@reduxjs/toolkit";
import mediaReducer from "./media/media.slice";
import searchReducer from "./search/search.slice";
import overviewReducer from "./overview/mediaOverview.slice";
const store = configureStore({
  reducer: {
    media: mediaReducer,
    search: searchReducer,
    overview: overviewReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
