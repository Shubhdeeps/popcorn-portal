// categories on dashboard => Popular in 2024
// => highest revenue
// => high vote count
//  => Popular in estonia
import Navbar from "@/components/Layout/Navbar";
import { useFetch } from "@/hooks/useFetch";
import { APIEndpoints } from "@/utils/endpoints";

// API reference => https://developer.themoviedb.org/reference/tv-episode-videos
function App() {
  const res2 = useFetch(APIEndpoints.Languages);
  console.log({ res2 });

  return (
    <>
      <Navbar />
      <div className="mt-5">
        <h2 className="">Grid System</h2>
        <div className="row border-1">
          <div className="col-xs-12 col-sm-5 col-xl-3 border-1">
            <div className="card">
              <h3 className="card-title">Hello, ninjas</h3>
              <p className="card-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-5 col-xl-3 border-1">
            <div className="card">
              <h3 className="card-title">Hello, ninjas</h3>
              <p className="card-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-5 col-xl-3 border-1">
            <div className="card">
              <h3 className="card-title">Hello, ninjas</h3>
              <p className="card-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-5 col-xl-3 border-1">
            <div className="card">
              <h3 className="card-title">Hello, ninjas</h3>
              <p className="card-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
