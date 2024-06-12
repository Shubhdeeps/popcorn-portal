import { RouterProvider } from "react-router-dom";
import { router } from "./pages";

function App() {
  console.log("APP");
  return <RouterProvider router={router} />;
}

export default App;
