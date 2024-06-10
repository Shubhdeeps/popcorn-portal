import axios, { AxiosError, AxiosRequestConfig } from "axios";

const AUTH_TOKEN = import.meta.env.VITE_API_READ_ACCESS_TOKEN;

export default async function axiosFetch(
  URL: string,
  requestType: "GET" | "POST" = "GET",
  requestData: Record<string, string | number | boolean> = {}
) {
  try {
    const config: AxiosRequestConfig = {
      method: requestType,
      url: URL,
      data: requestData,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    };
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.log({ error });
    if (error instanceof AxiosError) {
      throw error.message;
    }

    //error un-related to API
    throw "Something went wrong!";
  }
}
