// categories on dashboard => Popular in 2024
// => highest revenue
// => high vote count
//  => Popular in estonia
import { RouterProvider } from "react-router-dom";
import { router } from "./pages";

// API reference => https://developer.themoviedb.org/reference/tv-episode-videos
function App() {
  return <RouterProvider router={router} />;
}

export default App;
