import { AppDispatch, RootState } from "@/store";
import { mediaReducerAsync } from "@/store/media/media.slice";
import { APIEndpointKeys, APIEndpoints } from "@/utils/endpoints";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useFetch<T>(APIKey: APIEndpointKeys, ApiEndpoint?: string) {
  const data = useSelector((state: RootState) => state.media.data)[APIKey];
  const apiEndpoint = ApiEndpoint || APIEndpoints[APIKey];
  const dispatch = useDispatch<AppDispatch>();
  const currentPageNumber = useRef({
    currentPage: 0,
    totalPages: 0,
  });
  useEffect(() => {
    dispatch(
      mediaReducerAsync({
        APIKey: APIKey,
        ApiEndpoint: apiEndpoint,
      })
    );
  }, [APIKey, apiEndpoint, dispatch]);

  useEffect(() => {
    if (data && data?.page) {
      currentPageNumber.current = {
        currentPage: data.page,
        totalPages: data.total_pages,
      };
    }
  }, [data]);

  function fetchMore() {
    if (
      currentPageNumber.current.totalPages <=
      currentPageNumber.current.currentPage
    ) {
      //all pages were fetched
      return;
    }
    dispatch(
      mediaReducerAsync({
        APIKey: APIKey,
        ApiEndpoint: apiEndpoint,
      })
    );
  }

  return {
    loading: data?.loading || false,
    error: data?.error || "",
    results: (data?.results || []) as T[],
    hasMore: data?.page < data?.total_pages || false, // for UI to show "No more movies"s
    fetchMore,
  } as const;
}
