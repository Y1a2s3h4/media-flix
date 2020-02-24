import React, { useState, useEffect } from "react";
import "../App.css"
export default function More_Info({ match }) {

    useEffect(() => {
        discover();

    }, []);
    const [mData, setMData] = useState([]);
    const discover = () => {
        fetch(
            `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=0a3c058c4cdcdc5d426aeffc8ab1c63e&language=en-US`
        )
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMData(data);
            });
    };

    return (
        <div>
            <h1>More Info...</h1>
            <div id="main-card">
                {

                    <div key={mData.id} class="card mb-3" style={{ maxWidth: "35rem", }}>
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img
                                    src={`https://image.tmdb.org/t/p/original${mData.poster_path}`}
                                    class="card-img"
                                    alt="..."
                                />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">{mData.title}</h5>
                                    <p class="card-text">Release Date: {mData.release_date}</p>
                                    <p class="card-text">Original Language: {mData.original_language}</p>
                                    <p class="card-text">Ratings: {mData.vote_average}</p>
                                    <button className="btn more-info btn-outline-primary">
                                        More Info
                      </button>
                                </div>
                            </div>
                        </div>
                    </div>

                }
            </div>
            <div className="bg-header "></div>

        </div>
    )
}