// categories on dashboard => Popular in 2024
// => highest revenue
// => high vote count
//  => Popular in estonia

import Navbar from "@/components/Layout/Navbar";
import { useFetch } from "@/hooks/useFetch";
import { APIEndpoints } from "@/utils/endpoints";

// API reference => https://developer.themoviedb.org/reference/tv-episode-videos
function App() {
  // const guestSessionid = "d3448f862ba6d7af29a21d77d524a899";
  // // const res1 = useFetch(APIEndpoints.GuestSession);
  // // console.log({ res1 });
  const res2 = useFetch(APIEndpoints.Languages);
  console.log({ res2 });

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
