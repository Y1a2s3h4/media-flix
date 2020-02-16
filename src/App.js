import React from "react";
import SearchMovies from "./components/Search_Movies";
import "./App.css";
import LandingPage from "./components/Landing_Page";
function App() {
  return (
    <div className="main-container-wrapper">
      <LandingPage />
      <div className="bg-header ">
        <SearchMovies />
      </div>
    </div>
  );
}

export default App;
