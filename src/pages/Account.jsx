import React from "react";
import SavedShows from "../components/SavedShows/SavedShows";

function Account() {
  return (
    <>
      <div className="text-gray-300 h-[500px] w-full relative">
        <img
          className="h-full w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="Sign bg image"
        />

        <div className="absolute top-0 left-0 bg-[rgba(0,0,0,0.6)] w-full h-full flex items-center px-5">
          <div>
            <h3 className="text-white font-bold text-3xl">Saved Shows</h3>
          </div>
        </div>
      </div>

      <SavedShows />
    </>
  );
}

export default Account;
