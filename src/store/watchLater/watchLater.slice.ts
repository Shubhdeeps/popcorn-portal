import { MovieModel } from "@/models/Movie.model";
import { TvShow } from "@/models/TV.model";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type WatchLaterMovie = MovieModel & {
  media_type: Partial<"movie">;
};
type WatchLaterTv = TvShow & {
  media_type: Partial<"tv">;
};
export type WatchLaterDataModel = (WatchLaterMovie | WatchLaterTv) & {
  addedOn: EpochTimeStamp;
};

interface MediaOverviewStoreState {
  // record: Key as API key name and values as API response
  data: WatchLaterDataModel[];
}

const initialState: MediaOverviewStoreState = {
  data: [],
};

const watchLaterSlice = createSlice({
  name: "watch-later-movie",
  initialState,
  reducers: {
    addToWatchLater: (
      state,
      action: PayloadAction<
        Omit<WatchLaterDataModel, "addedOn"> & {
          media_type: "tv" | "movie";
        }
      >
    ) => {
      const addedOn = Date.now();
      const data = action.payload as unknown as WatchLaterDataModel;
      Object.assign(data, { addedOn });
      state.data.push(data);
    },

    removeFromWatchLater(state, action: PayloadAction<number>) {
      console.log(action.payload);
      state.data = state.data.filter((movie) => movie.id !== action.payload);
    },
  },
});

export const { addToWatchLater, removeFromWatchLater } =
  watchLaterSlice.actions;
const watchLaterReducer = watchLaterSlice.reducer;
export default watchLaterReducer;
