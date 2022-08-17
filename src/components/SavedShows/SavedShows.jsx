import React, { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { db } from "../../firebase";
import { updateDoc, onSnapshot, doc } from "firebase/firestore";

import classNames from "classnames";
import { VscChromeClose } from "react-icons/vsc";

function SavedShows() {
  const [movies, setMovies] = useState([]);

  const { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const trancateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    }
    return str;
  };

  const movieRef = doc(db, "users", `${user?.email}`);

  const deleteShow = async (passID) => {
    try {
      const result = movies.filter((item) => item.id !== passID);

      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <div className="flex items-center justify-between px-5">
        <h2 className="text-gray-100 font-semibold text-lg md:text-xl py-2">
          My Shows
        </h2>
      </div>

      <div className="relative px-10 w-full">
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
                <div
                  key={i}
                  className="group inline-block relative mb-4 h-[150px] bg-red-600"
                >
                  <img
                    className="w-full h-full block object-cover"
                    src={`https://image.tmdb.org/t/p/original/${item?.img}`}
                    alt={item?.title}
                  />

                  <div className="__groupElement opacity-0 absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)] duration-200">
                    <div className="text-gray-300 flex items-start flex-col gap-0.5 justify-end h-full w-full pl-3 !pb-3">
                      <p
                        className={classNames(
                          "text-xs font-semibold md:font-bold whitespace-normal translate-y-4 opacity-0 duration-200 md:text-sm",
                        )}
                      >
                        {item?.title}
                      </p>
                      <p
                        style={{ transitionDelay: "100ms" }}
                        className="text-xs font-normal text-gray-400 whitespace-normal translate-y-4 transition-all opacity-0 duration-200"
                      >
                        {trancateString(item?.overview, 40)}
                      </p>
                      <div
                        style={{ transitionDelay: "200ms" }}
                        className="space-x-1.5 mt-2 translate-y-4 opacity-0 duration-200"
                      >
                        <button className="px-2 py-1 rounded-sm bg-primary text-gray-300 text-xs font-medium">
                          Trailer
                        </button>
                        <button className="px-2 py-1 rounded-sm bg-primary text-gray-300 text-xs font-medium">
                          Details
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => deleteShow(item.id)}
                      className="!text-gray-200 select-none absolute p-2 text-lg top-0 right-0"
                    >
                      <VscChromeClose />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </React.Fragment>
  );
}

export default SavedShows;
