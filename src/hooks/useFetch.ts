import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

type LoadingState = {
  state: "loading";
};
type ErrorState = {
  state: "error";
  error: string;
};
type SuccessState<T> = {
  state: "success";
  payload: T;
};
type Idle = {
  state: "idle";
};

type ResponseState<T> = LoadingState | ErrorState | SuccessState<T> | Idle;

/**
 *
 * @param URL URL of path to fetch
 * @param requestType "get" or "post" method for http request
 * @param requestData optional: required if post method
 * @returns {
 *   state: "loading" | "idle" | "error" | "loading";
 *   payload: data payload
 * }
 */
export function useFetch<T>(
  URL: string,
  requestType: "get" | "post" = "get",
  requestData?: Record<string, string | number | boolean>
): ResponseState<T> {
  const [state, setState] = useState<ResponseState<T>>({
    state: "idle",
  });

  useEffect(() => {
    (async () => {
      setState({
        state: "loading",
      });
      try {
        const request = {
          method: requestType,
          url: URL,
        };
        if (requestData) {
          Object.assign(request, { data: requestData });
        }

        const _response = await axios(request);
        const data = _response.data;
        setState({
          state: "success",
          payload: data,
        });
      } catch (error) {
        if (error instanceof AxiosError) {
          // Axios error
          setState({
            state: "error",
            error: error.message,
          });
        } else {
          // not axios related error
          setState({
            state: "error",
            error: "Something went wrong!",
          });
        }
      }
    })();
  }, [URL, requestData, requestType]);

  return state;
}
