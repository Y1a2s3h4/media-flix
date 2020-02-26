import React, { useState, useEffect } from "react";
import "../App.css";
export default function More_Info({ match }) {
  useEffect(() => {
    discover();
    console.log(match);
  }, []);
  const [tData, setTData] = useState([]);
  const discover = () => {
    fetch(
      `https://api.themoviedb.org/3/tv/${match.params.id}?api_key=0a3c058c4cdcdc5d426aeffc8ab1c63e&language=en-US`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTData(data);
      });
  };

  return (
    <div className="more__wrapper">
      <center>
        <h1
          style={{ color: "white" }}
          className="text-uppercase display-5 d-inline more__info"
        >
          More Tv Info
        </h1>
      </center>
      <div id="main__card">
        {
          <center>
            <div
              key={tData.id}
              class="card mb-3"
              style={{ maxWidth: "50rem", margin: "3rem 0 0 0em" }}
            >
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img
                    src={`https://image.tmdb.org/t/p/original${tData.poster_path}`}
                    class=" img-fluid"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body text-left">
                    <h5 class="card-title">{tData.name}</h5>
                    <p class="card-text">
                      Release Date: {tData.first_air_date}
                    </p>
                    <p class="card-text">
                      Original Language: {tData.original_language}
                    </p>
                    <p class="card-text">Ratings: {tData.vote_average}</p>
                    <p class="card-text">Overview: {tData.overview}</p>
                    <p class="card-text">
                      Total Number Of Seasons: {tData.number_of_seasons}
                    </p>
                    <p class="card-text">
                      Total Number Of Episodes: {tData.number_of_episodes}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </center>
        }
      </div>
      <div className="bg-header"></div>
    </div>
  );
}

// https://api.themoviedb.org/3/tv/60735?api_key=0a3c058c4cdcdc5d426aeffc8ab1c63e&language=en-US
