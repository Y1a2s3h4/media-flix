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
      `https://bing-news-search1.p.rapidapi.com/news?category=entertainment&mkt=en-IN&safeSearch=Off&textFormat=Raw`,
      {
        method: "GET",
        headers: {
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key":
            "678afc3fabmshc0937d1b8c0b77cp17e8c7jsn2e631e9b2e7c",
          "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNData(data.value);
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
          {news_data.map((items) => (
            <div className="col-md-6">
              <div
                class="card h-75 news__card mb-4"
                style={{ boxShadow: "0 2px 30px rgba(0, 0, 0, .1)" }}
              >
                <div class="card-header">{items.name}</div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <p style={{ fontSize: 16 }}>{items.description}</p>
                    <footer class="blockquote-footer">
                      <cite title="Source Title">
                        {items.provider[0].name},{" "}
                        {
                          new Date(items.datePublished)
                            .toISOString()
                            .split("T")[0]
                        }
                      </cite>
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
