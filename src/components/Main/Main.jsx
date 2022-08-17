import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../../Request";

function Main() {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios
      .get(requests.requestPopular)
      .then((response) => setMovies(response.data.results));
  }, []);

  const trancateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    }
    return str;
  };

  return (
    <main className="w-full h-screen">
      <div className="w-full h-full relative">
        <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-r from-black/80"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />

        <div className="space-y-7 absolute top-1/2 -translate-y-1/2 left-0 p-8">
          <div className="space-y-3">
            <h3 className="text-white font-bold text-3xl">{movie?.title}</h3>

            <div className="space-x-3">
              <button className="capitalize font-medium text-black bg-gray-300 px-5 py-2 rounded border border-gray-300">
                Play
              </button>
              <button className="capitalize font-medium text-gray-300 px-5 py-2 rounded border border-gray-300">
                Watch Later
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-sm font-semibold text-white/60">
              <span className="text-[15px]">Released</span>{" "}
              {movie?.release_date}
            </p>

            <p className="text-sm font-medium text-gray-300 md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%]">
              {trancateString(movie?.overview, 150)}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
