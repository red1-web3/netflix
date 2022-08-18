import React, { useState } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import classNames from "classnames";
import LoginMessage from "../LoginMessage/LoginMessage";

function Movie({ item, isLoading }) {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike((like) => !like);
      setSaved(true);

      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      setIsOpen(true);
    }
  };

  const trancateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    }
    return str;
  };

  const titleTextLength = item?.title.length > 15;

  // if (isLoading) {
  //   return (
  //     <div className="bg-zinc-900 inline-block text-gray-300">Laoding...</div>
  //   );
  // }

  return (
    <>
      <div className="group inline-block">
        <img
          className="w-full h-full block"
          src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
          alt={item.title}
        />

        <div className="__groupElement opacity-0 absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)] duration-200">
          <div className="text-gray-300 flex items-start flex-col gap-0.5 justify-end h-full w-full pl-3 !pb-3">
            <p
              className={classNames(
                "text-xs font-semibold md:font-bold whitespace-normal translate-y-4 opacity-0 duration-200",
                titleTextLength ? "md:text-xs w-[90%]" : "md:text-sm",
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
            onClick={() => saveShow()}
            className="text-gray-200 select-none absolute p-2 text-lg top-0 right-0 __heart opacity-0 duration-500 scale-50"
          >
            {!like ? <IoMdHeartEmpty /> : <IoMdHeart />}
          </button>
        </div>
        {modalIsOpen && (
          <LoginMessage modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
        )}
      </div>
    </>
  );
}

export default Movie;
