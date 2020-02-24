import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import imgMovie from "../img/img-movie.svg";

export default class Landing_Page extends Component {
  state = {
    input: "",
    key: "0a3c058c4cdcdc5d426aeffc8ab1c63e",
    data: []
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.input);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.state.key}&query=${this.state.input}`
    )
      .then(res => res.json())
      .then(dataJson => {
        console.log(dataJson);
        this.setState({ data: dataJson.results }, () => {
          console.log(this.state);
        });
      });
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { input } = this.state;

    return (
      <div className="Landing _wrapper">
        <div className="container-fluid">
          <div className="img__movie__wrapper">
            <img src={imgMovie} className="img-movie" alt="unDraw1" />
          </div>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              id="search-movie"
              name="input"
              value={input}
              placeholder="Enter Movie Name "
              className="form-control"
              onChange={this.onChange}
              required="True"
            />
            <button type="submit" className="btn search btn-outline-primary btn-block">
              Search
            </button>
          </form>
        </div>
        <div id="main-card">
          {this.state.data.map(item => {
            return (
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
                      <p class="card-text">Original Language: {item.original_language}</p>
                      <p class="card-text">Ratings: {item.vote_average}</p>
                      <Link to={`/${item.id}`} className="btn more-info btn-outline-primary">
                        More Info
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-header "></div>
      </div>
    );
  }
}
