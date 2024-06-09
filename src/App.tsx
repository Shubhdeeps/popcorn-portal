// categories on dashboard => Popular in 2024
// => highest revenue
// => high vote count
//  => Popular in estonia
import { useFetch } from "@/hooks/useFetch";
import { APIEndpoints } from "@/utils/endpoints";
import Layout from "./components/Layout";
import PopularMovieCard from "./features/Movie/Cards/PopularMovieCard";
import NowPlayingMovieCard from "./features/Movie/Cards/NowPlayingMovieCard";
import UpcomingMovieCard from "./features/Movie/Cards/UpcomingMovieCard";
import UpcomingMovieMiniCard from "./features/Movie/Cards/UpcomingMovieMiniCard";
import PersonCard from "./features/People/Cards/PersonCard";
import TVCard from "./features/TV/Cards/TvCard";

// API reference => https://developer.themoviedb.org/reference/tv-episode-videos
function App() {
  const res2 = useFetch(APIEndpoints.Languages);
  console.log({ res2 });

  return (
    <Layout>
      <div className="max-w-50">
        <TVCard />
      </div>
      <PersonCard />
      <div className="max-w-100 pt-2 pb-2">
        <UpcomingMovieCard />
        <div className="max-w-50">
          <UpcomingMovieMiniCard />
        </div>
      </div>
      <div className="max-w-50">
        <NowPlayingMovieCard />
      </div>
      <div className="max-w-30">
        <PopularMovieCard />
      </div>
      {/* <div className="">
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
      </div> */}
    </Layout>
  );
}

export default App;
