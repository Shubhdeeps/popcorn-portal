import { APIResponseOverviewModel } from "@/models/EndPoints.model";
import { VideoModel } from "@/models/Video.model";
import axiosFetch from "@/utils/axiosFetch";
import { APIEndpoints } from "@/utils/endpoints";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type MediaOverviewDataModel = APIResponseOverviewModel & {
  loading: boolean;
  error?: string | null;
  videoResult: {
    id: string;
    results: VideoModel[];
  };
};

interface MediaOverviewStoreState {
  // record: Key as API key name and values as API response
  data: Partial<MediaOverviewDataModel>;
}

const initialState: MediaOverviewStoreState = {
  data: {
    loading: false,
  },
};

const overviewSlice = createSlice({
  name: "overview",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(overviewReducerAsync.pending, (state) => {
        state.data.loading = true;
      })
      .addCase(overviewReducerAsync.fulfilled, (state, action) => {
        state.data = {
          error: null,
          loading: false,
          ...action.payload,
        };
      })
      .addCase(overviewReducerAsync.rejected, (state, action) => {
        console.log({ action });
        const error = action.error.message;
        state.data.loading = false;
        state.data.error = error;
      });
  },
});

export const overviewReducerAsync = createAsyncThunk(
  "mediaOverview/mediaDataAsync",
  async (request: { mediaId: number; type: "movie" | "tv" | "person" }) => {
    const baseURL = `${APIEndpoints.MediaOverview}${request.type}/${request.mediaId}`;
    const ApiEndpoint = baseURL + "?language=en-US";
    const videoEndPoint = baseURL + "/videos?language=en-US";
    const response = await axiosFetch(ApiEndpoint);
    if (request.type !== "person") {
      const videoResponse = await axiosFetch(videoEndPoint);
      Object.assign(response, {
        videoResult: videoResponse,
        type: request.type,
      });
    } else {
      Object.assign(response, {
        type: "person",
      });
    }
    return response;
  }
);

const overviewReducer = overviewSlice.reducer;
export default overviewReducer;
