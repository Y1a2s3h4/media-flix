import React, { useState, useEffect } from "react";
import Preloader from "./Preloader";

export default function News() {
  useEffect(() => {
    fetch_News();
  }, []);
  const [news_data, setNData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const fetch_News = () => {
    setLoading(true);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=4f0ed34c2436488fbea43a2b2255489e&category=entertainment`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setNData(data.articles);
        setLoading(false);
      });
  };

  return (
    <div className="marginTop-c">
      <center className="mt-5">
        <h1 className="white c-title d-inline text-uppercase">
          Entertainment News
        </h1>
      </center>
      <div className="container">
        {isLoading && <Preloader />}
        <div className="row">
          {news_data.map(items => (
            <div className="col-md-6">
              <div
                class="card h-75 news__card mb-4"
                style={{ boxShadow: "0 2px 30px rgba(0, 0, 0, .1)" }}
              >
                <div class="card-header">{items.source.name}</div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <p style={{ fontSize: 16 }}>{items.title}</p>
                    <footer class="blockquote-footer">
                      <cite title="Source Title">{items.author}</cite>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}
