import React, { Component } from "react";
import "../App";
import "../App.css";
import imgMovie from "../img/img-movie.svg";

export default class Search_Movies extends Component {
  state = {
    input: "",
    key: "0a3c058c4cdcdc5d426aeffc8ab1c63e",
    data: ""
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.input);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.state.key}&query=${this.state.input}`
    )
      .then(res => res.json())
      .then(data => this.setState((this.state.data = data)));
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { input } = this.state;

    return (
      <div className="container-fluid">
        <div className="img__movie__wrapper">
          <img src={imgMovie} className="img-movie" alt="unDraw1" />
        </div>
        <div className="search__movie__wrapper">
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              id="search-movie"
              name="input"
              value={input}
              placeholder="Enter Movie Name "
              className="form-control"
              onChange={this.onChange}
            />
            <button
              onClick={this.onSubmit}
              className="btn btn-outline-primary btn-block"
            >
              Search
            </button>
          </form>

          <div id="main-card">
            {this.state.data.map(item => {
              <div class="card" style="width: 18rem;">
                <img
                  src={item.results.poster_path}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">{item.rtesults.title}</h5>
                  <p class="card-text">{item.results.overview}</p>
                </div>
              </div>;
            })}
          </div>
        </div>
      </div>
    );
  }
}
// http://www.omdbapi.com/?t=parasite&plot=full&apikey=db78d6fa
