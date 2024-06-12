import { APIResponseDataModel } from "@/models/EndPoints.model";
import axiosFetch from "@/utils/axiosFetch";
import { APIEndpointKeys } from "@/utils/endpoints";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type MediaDataModel = APIResponseDataModel & {
  loading: boolean;
  error: string | undefined;
  APIKey: APIEndpointKeys; //keys of endpoint
};

interface MediaStoreState {
  // record: Key as API key name and values as API response
  data: Record<APIEndpointKeys | string, MediaDataModel>;
}

const initialState: MediaStoreState = {
  data: {},
};

const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(mediaReducerAsync.pending, (state, action) => {
        const key = action.meta.arg.APIKey;
        try {
          state.data[key]["loading"] = true;
        } catch (e) {
          //previous state does not exist -> init a new state
          state.data[key] = {
            loading: true,
            APIKey: key,
            error: undefined,
            page: 0,
            results: [],
            total_pages: 0,
            total_results: 0,
          };
        }
      })
      .addCase(mediaReducerAsync.fulfilled, (state, action) => {
        const fetchMore = action.meta.arg.fetchMore;
        const key = action.meta.arg.APIKey;
        //update the state with the key -> assuming that previous state already exists from "pending" case
        state.data[key].loading = false;
        state.data[key].error = undefined;
        state.data[key].APIKey = key;
        state.data[key].page = action.payload.page;
        state.data[key].total_pages = action.payload.total_pages;
        state.data[key].total_results = action.payload.total_results;
        if (fetchMore) {
          state.data[key].results?.push(
            ...(action.payload.results || action.payload.cast)
          );
          return;
        }

        state.data[key]["results"] = [
          ...(action.payload.results || action.payload.cast),
        ];
      })
      .addCase(mediaReducerAsync.rejected, (state, action) => {
        // console.log({ action });
        const key = action.meta.arg.APIKey;
        const error = action.error.message;
        state.data[key]["loading"] = false;
        state.data[key]["error"] = error;
      });
  },
});

export const mediaReducerAsync = createAsyncThunk(
  "media/mediaDataAsync",
  async (request: {
    APIKey: APIEndpointKeys;
    ApiEndpoint: string;
    fetchMore: boolean;
  }) => {
    // const ApiEndPoint = APIEndpoints[request.APIKey];
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await axiosFetch(request.ApiEndpoint);
    return response;
  }
);

const mediaReducer = mediaSlice.reducer;
export default mediaReducer;
