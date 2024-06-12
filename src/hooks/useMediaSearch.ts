import { SearchTabs } from "@/models/SearchTabs.model";
import { useDebounce } from "./useDebounce";
import { useEffect, useRef, useState } from "react";
import { APIEndpoints } from "@/utils/endpoints";
import { searchReducerAsync } from "@/store/search/search.slice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";

enum TabAndQueryParam {
  all = "multi",
  movie = "movie",
  tv = "tv",
  person = "person",
}

export function useMediaSearch(searchText: string, selectedTab: SearchTabs) {
  const data = useSelector((state: RootState) => state.search.data);
  const [scrolledToEnd, setScrolledToEnd] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();
  const pageStatus = useRef({
    nextPageNumber: 1,
    lastPageFetched: 0,
    totalPages: 0,
    total_results: 0,
    baseQuery: "",
  });
  //debounced the result
  const [debouncedValue] = useDebounce(searchText, 800);

  useEffect(() => {
    if (debouncedValue.length < 2) {
      return;
    }
    //1. select a parameter based on selected tab
    const param = TabAndQueryParam[selectedTab];
    //2. encode the search URL
    const queryText = encodeURI(debouncedValue);
    // 3. Construct the API endpoint
    pageStatus.current.baseQuery = `${APIEndpoints.Search}/${param}?query=${queryText}&include_adult=false&language=en-US&page=`;

    // 4. reset the page stats as base query changed
    pageStatus.current.nextPageNumber = 1;
    pageStatus.current.lastPageFetched = 0;
    pageStatus.current.totalPages = 0;
    pageStatus.current.total_results = 0;

    //5. call the api -> dispatch redux middleware
    dispatch(
      searchReducerAsync({
        ApiEndpoint:
          pageStatus.current.baseQuery + pageStatus.current.nextPageNumber,
        fetchMore: false,
      })
    );

    pageStatus.current.lastPageFetched = pageStatus.current.nextPageNumber;
  }, [debouncedValue, dispatch, selectedTab]);

  useEffect(() => {
    // Only for updating page numbers to avoid excessive refreshes and stale data
    if (data && data?.page) {
      pageStatus.current.nextPageNumber = data.page + 1;
      pageStatus.current.totalPages = data.total_pages;
      pageStatus.current.total_results = data.total_results;
    }
  }, [data]);

  useEffect(() => {
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
      return;
    }

    //1. select a parameter based on selected tab

    console.log(
      "fetching more ...",
      pageStatus.current.baseQuery + pageStatus.current.nextPageNumber
    );

    // console.log("fetching..", { apiQuery });
    //4. call the api -> dispatch redux middleware
    dispatch(
      searchReducerAsync({
        ApiEndpoint:
          pageStatus.current.baseQuery + pageStatus.current.nextPageNumber,
        fetchMore: scrolledToEnd,
      })
    );
    pageStatus.current.lastPageFetched = pageStatus.current.nextPageNumber;
  }, [dispatch, scrolledToEnd]);

  return {
    loading: data?.loading || false,
    error: data?.error || "",
    results: debouncedValue.length < 2 ? [] : data?.results || [],
    hasMore: data?.page < data?.total_pages || false, // for UI to show "No more movies"s
    setScrolledToEnd,
  } as const;
}
