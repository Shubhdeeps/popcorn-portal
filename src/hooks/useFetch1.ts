import { AppDispatch, RootState } from "@/store";
import { mediaReducerAsync } from "@/store/media/media.slice";
import { APIEndpointKeys, APIEndpoints } from "@/utils/endpoints";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useFetch<T>(APIKey: APIEndpointKeys, ApiEndpoint?: string) {
  const [scrolledToEnd, setScrolledToEnd] = useState<boolean>(false);
  const data = useSelector((state: RootState) => state.media.data)[APIKey];
  const apiEndpoint = ApiEndpoint || APIEndpoints[APIKey];
  const dispatch = useDispatch<AppDispatch>();
  const currentPageNumber = useRef({
    currentPage: 1,
    totalPages: 0,
    total_results: 1,
  });

  useEffect(() => {
    //triggered when user scrolled to end to fetch more data
    if (
      currentPageNumber.current.totalPages <=
        currentPageNumber.current.currentPage &&
      currentPageNumber.current.total_results === 0 // if no results found -> the total_results will be set to zero on second load
    ) {
      //all pages were fetched
      return;
    }

    dispatch(
      mediaReducerAsync({
        APIKey: APIKey,
        ApiEndpoint: `${apiEndpoint}?language=en-US&page=${currentPageNumber.current.currentPage}`,
      })
    );
  }, [APIKey, apiEndpoint, dispatch, scrolledToEnd]);

  useEffect(() => {
    // Only for updating page numbers to avoid excessive refreshes and stale data
    if (data && data?.page) {
      currentPageNumber.current = {
        currentPage: data.page, // if no results are found -> currentPage will be set to zero
        totalPages: data.total_pages,
        total_results: data.total_results,
      };
    }
  }, [data]);

  // useEffect(() => {
  //   //triggered when user scrolled to end to fetch more data
  //   if (
  //     currentPageNumber.current.totalPages <=
  //     currentPageNumber.current.currentPage
  //   ) {
  //     //all pages were fetched
  //     return;
  //   }
  //   dispatch(
  //     mediaReducerAsync({
  //       APIKey: APIKey,
  //       ApiEndpoint: apiEndpoint, //update it with page number
  //     })
  //   );
  // }, [APIKey, apiEndpoint, dispatch, scrolledToEnd]);

  return {
    loading: data?.loading || false,
    error: data?.error || "",
    results: (data?.results || []) as T[],
    hasMore: data?.page < data?.total_pages || false, // for UI to show "No more movies"s
    setScrolledToEnd,
  } as const;
}
