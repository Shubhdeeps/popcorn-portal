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
  const pageStatus = useRef({
    nextPageNumber: 1,
    lastPageFetched: 0,
    totalPages: 0,
    total_results: 0,
    baseQuery: `${apiEndpoint}?language=en-US&page=`, // non changing -> no need to update during side-effect
  });

  useEffect(() => {
    console.log(
      "fetching first ...",
      pageStatus.current.baseQuery + pageStatus.current.nextPageNumber
    );
    if (
      pageStatus.current.lastPageFetched === pageStatus.current.nextPageNumber
    ) {
      return;
    }

    dispatch(
      mediaReducerAsync({
        APIKey: APIKey,
        ApiEndpoint:
          pageStatus.current.baseQuery + pageStatus.current.nextPageNumber,
      })
    );

    pageStatus.current.lastPageFetched = pageStatus.current.nextPageNumber;
  }, [APIKey, dispatch]);

  useEffect(() => {
    console.log({ data });
    // Only for updating page numbers to avoid excessive refreshes and stale data
    if (data && data?.page) {
      pageStatus.current.nextPageNumber = data.page + 1;
      pageStatus.current.totalPages = data.total_pages;
      pageStatus.current.total_results = data.total_results;
    }
  }, [data]);

  // For infinite scroll
  useEffect(() => {
    //triggered when user scrolled to end to fetch more data
    console.log(pageStatus.current);
    const isUserOnLastPage =
      pageStatus.current.totalPages < pageStatus.current.nextPageNumber;
    const hasPreviousPageFetched = pageStatus.current.total_results === 1; //should not be 1 when there's a final data
    const isNextPageAlreadyFetched =
      pageStatus.current.nextPageNumber === pageStatus.current.lastPageFetched;

    //triggered when user scrolled to end to fetch more data
    if (
      isUserOnLastPage ||
      !scrolledToEnd ||
      hasPreviousPageFetched ||
      isNextPageAlreadyFetched
    ) {
      console.log("returning without fetching", {
        isUserOnLastPage,
        notScrolledToEnd: !scrolledToEnd,
        hasPreviousPageFetched,
        isNextPageAlreadyFetched,
      });
      return;
    }

    console.log(
      "fetching more ...",
      pageStatus.current.baseQuery + pageStatus.current.nextPageNumber
    );

    dispatch(
      mediaReducerAsync({
        APIKey: APIKey,
        ApiEndpoint:
          pageStatus.current.baseQuery + pageStatus.current.nextPageNumber,
      })
    );
    pageStatus.current.lastPageFetched = pageStatus.current.nextPageNumber;
  }, [APIKey, dispatch, scrolledToEnd]);

  return {
    loading: data?.loading || false,
    error: data?.error || "",
    results: (data?.results || []) as T[],
    hasMore: data?.page < data?.total_pages || false, // for UI to show "No more movies"s
    setScrolledToEnd,
  } as const;
}
