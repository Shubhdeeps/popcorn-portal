import { APIResponseDataModel } from "@/models/EndPoints.model";
import axiosFetch from "@/utils/axiosFetch";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type MediaDataModel = APIResponseDataModel & {
  loading: boolean;
  error?: string | null;
};

interface MediaStoreState {
  // record: Key as API key name and values as API response
  data: MediaDataModel;
}

const initialState: MediaStoreState = {
  data: {
    loading: false,
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
};

const mediaSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchReducerAsync.pending, (state) => {
        state.data.loading = true;
      })
      .addCase(searchReducerAsync.fulfilled, (state, action) => {
        const fetchMore = action.meta.arg.fetchMore;

        state.data["error"] = null;
        state.data["loading"] = false;
        state.data["page"] = action.payload.page;
        state.data["total_pages"] = action.payload.total_pages;
        state.data["total_results"] = action.payload.total_results;

        if (fetchMore) {
          //concat if its fetching more!
          state.data["results"].push(...action.payload.results);
          return;
        }
        state.data["results"] = action.payload.results;
      })
      .addCase(searchReducerAsync.rejected, (state, action) => {
        const error = action.error.message;
        state.data.loading = false;
        state.data.error = error;
      });
  },
});

export const searchReducerAsync = createAsyncThunk(
  "search/mediaDataAsync",
  async (request: { ApiEndpoint: string; fetchMore: boolean }) => {
    const response = await axiosFetch(request.ApiEndpoint);
    return response;
  }
);

const searchReducer = mediaSlice.reducer;
export default searchReducer;
