import { APIResponseDataModel } from "@/models/EndPoints.model";
import axiosFetch from "@/utils/axiosFetch";
import { APIEndpointKeys } from "@/utils/endpoints";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type MovieDataModel = APIResponseDataModel & {
  loading: boolean;
  error: string | undefined;
  APIKey: APIEndpointKeys; //keys of endpoint
};

interface MovieStoreState {
  // record: Key as API key name and values as API response
  data: Record<APIEndpointKeys | string, MovieDataModel>;
}

const initialState: MovieStoreState = {
  data: {},
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(moviesReducerAsync.pending, (state, action) => {
        const key = action.meta.arg.APIKey;

        console.log({ lodinngAction: key });
        const previousState = state.data[key] || {};
        Object.assign(previousState, { loading: true });
        state.data[key] = previousState;
      })
      .addCase(moviesReducerAsync.fulfilled, (state, action) => {
        const key = action.meta.arg.APIKey;
        //update the state with the key
        state.data[key] = {
          error: null,
          loading: false,
          APIKey: key,
          ...action.payload,
        };
      })
      .addCase(moviesReducerAsync.rejected, (state, action) => {
        console.log({ action });
        const key = action.meta.arg.APIKey;
        const error = action.error.message;

        state.data[key]["error"] = error;
      });
  },
});

export const moviesReducerAsync = createAsyncThunk(
  "movies/moviesDataAsync",
  async (request: { APIKey: APIEndpointKeys; ApiEndpoint: string }) => {
    // const ApiEndPoint = APIEndpoints[request.APIKey];
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await axiosFetch(request.ApiEndpoint);
    return response;
  }
);

const moviesReducer = moviesSlice.reducer;
export default moviesReducer;
