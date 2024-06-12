import { MovieModel } from "@/models/Movie.model";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type WatchLaterDataModel = (MovieModel & {
  addedOn: EpochTimeStamp;
})[];

interface MediaOverviewStoreState {
  // record: Key as API key name and values as API response
  data: WatchLaterDataModel;
}

const initialState: MediaOverviewStoreState = {
  data: [],
};

const watchLaterSlice = createSlice({
  name: "watch-later-movie",
  initialState,
  reducers: {
    addToWatchLater: (state, action: PayloadAction<MovieModel>) => {
      const addedOn = Date.now();
      const data = action.payload as WatchLaterDataModel[number];
      Object.assign(data, { addedOn });
      state.data.push(data);
    },
  },
});

export const { addToWatchLater } = watchLaterSlice.actions;
const watchLaterReducer = watchLaterSlice.reducer;
export default watchLaterReducer;
