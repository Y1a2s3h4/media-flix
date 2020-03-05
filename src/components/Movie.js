import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Preloader from "./Preloader";

export default function Movie() {
  useEffect(() => {
    discover();
  }, []);
  const [movie_data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const discover = () => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=0a3c058c4cdcdc5d426aeffc8ab1c63e&language=en-US&sort_by=popularity.desc&page=1`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        setData(data.results);
        setLoading(false);
      });
  };
  //maxHeight: "17.5625rem"
  return (
    <div className="c-marginTop">
      <center>
        <h1 className="white d-inline text-uppercase c-title">Movies</h1>
        {isLoading && <Preloader />}
        <div className="row main-card">
          {movie_data.map(item => (
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div
                key={item.id}
                class="card mb-3"
                style={{ maxWidth: "35rem" }}
              >
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img
                      src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                      class="card-img"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body text-left">
                      <h5 class="card-title title">{item.title}</h5>
                      <p class="card-text">Release Date: {item.release_date}</p>
                      <p class="card-text">
                        Original Language: {item.original_language}
                      </p>
                      <p class="card-text">Ratings: {item.vote_average}</p>
                      <Link
                        to={`/${item.id}`}
                        className="btn more-info btn-outline-primary"
                      >
                        More Info
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </center>

      <div className="bg-header "></div>
    </div>
  );
}
