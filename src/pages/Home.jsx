import React from "react";
import Main from "../components/Main/Main";
import Row from "../components/Row/Row";
import requests from "../Request";

function Home() {
  return (
    <div>
      <Main />
      <div className="pt-8 px-10">
        <Row title="Popular" fetchURL={requests.requestPopular} />
        <Row title="TopRated" fetchURL={requests.requestTopRated} />
        <Row title="Trending" fetchURL={requests.requestTrending} />
        <Row title="Horror" fetchURL={requests.requestHorror} />
        <Row title="Upcoming" fetchURL={requests.requestUpcoming} />
      </div>
    </div>
  );
}

export default Home;
