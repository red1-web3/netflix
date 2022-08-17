import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => setMovies(response.data.results));
  }, [fetchURL]);

  return (
    <React.Fragment>
      <div className="flex items-center justify-between">
        <h2 className="text-gray-100 font-semibold text-lg md:text-xl py-2">
          {title}
        </h2>
      </div>

      <div className="relative flex items-center">
        <Swiper
          className="mySwiper"
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {movies.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <Movie item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </React.Fragment>
  );
}

export default Row;
