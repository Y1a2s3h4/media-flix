import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Popular() {
  useEffect(() => {
    discover();
  }, []);
  const [movie_data, setData] = useState([]);
  const discover = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=0a3c058c4cdcdc5d426aeffc8ab1c63e&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        setData(data.results);
      });
  };
  return (
    <div>
      <h1>Popular Movies</h1>
      <div id="main-card">
        {movie_data.map(item => (
          <div key={item.id} class="card mb-3" style={{ maxWidth: "35rem" }}>
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  class="card-img"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{item.title}</h5>
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
        ))}
      </div>
      <div className="bg-header "></div>
    </div>
  );
}
