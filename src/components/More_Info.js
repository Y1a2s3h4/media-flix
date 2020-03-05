import React, { useState, useEffect } from "react";
import "../App.css";
import Preloader from "./Preloader";

export default function More_Info({ match }) {
  useEffect(() => {
    discover();
  }, []);
  const [mData, setMData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const discover = () => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=0a3c058c4cdcdc5d426aeffc8ab1c63e&language=en-US`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMData(data);
        setLoading(false);
      });
  };

  return (
    <div className="more__wrapper">
      <center>
        <h1
          style={{ color: "white" }}
          className="text-uppercase display-5 d-inline more__info"
        >
          More Info
        </h1>
      </center>
      <div className="container">
        <div id="main__card">
          {isLoading && <Preloader />}

          {
            <center>
              <div
                key={mData.id}
                class="card mb-3"
                style={{ maxWidth: "50rem", margin: "3rem 0 0 0rem" }}
              >
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img
                      src={`https://image.tmdb.org/t/p/original${mData.poster_path}`}
                      class="card-img"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body text-left">
                      <h5 class="card-title">{mData.title}</h5>
                      <p class="card-text">
                        Release Date: {mData.release_date}
                      </p>
                      <p class="card-text">
                        Original Language: {mData.original_language}
                      </p>
                      <p class="card-text">Ratings: {mData.vote_average}</p>
                      <p class="card-text">Overview: {mData.overview}</p>
                    </div>
                  </div>
                </div>
              </div>
            </center>
          }
        </div>
      </div>

      <div className="bg-header"></div>
    </div>
  );
}
