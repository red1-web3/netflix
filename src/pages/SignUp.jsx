import React, { useId, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { Bars } from "react-loader-spinner";

function SignUp() {
  const id1 = useId();
  const id2 = useId();
  const id3 = useId();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const { signUp, user } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoader(true);
    signUp(email, password)
      .then((res) => {
        setLoader(false);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full h-screen">
      <img
        className="h-full w-full object-cover hidden sm:block"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="Sign bg image"
      />
      <div className="fixed top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center">
        <div
          className="max-w-[450px] h-[500px] w-full bg-black/75 py-16
        "
        >
          <div className="w-[85%] mx-auto space-y-6">
            <h3 className="font-bold text-2xl md:text-3xl text-slate-50">
              Sign Up
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col w-full gap-5">
                <label htmlFor={id1}>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full py-3 px-4 bg-gray-700 outline-none placeholder:capitalize rounded text-gray-300"
                    placeholder="email"
                    type="email"
                    id={id1}
                  />
                </label>
                <label htmlFor={id2}>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full py-3 px-4 bg-gray-700 outline-none placeholder:capitalize rounded text-gray-300"
                    placeholder="password"
                    type="password"
                    id={id2}
                  />
                </label>

                <button className="bg-primary flex justify-center w-full py-3 rounded font-semibold text-lg text-gray-300 mt-4">
                  {loader ? (
                    <Bars
                      height="30"
                      width="30"
                      color="#D1D5DB"
                      ariaLabel="bars-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />
                  ) : (
                    "Sign Up"
                  )}
                </button>

                <div className="flex items-center justify-between text-gray-600 select-none font-medium">
                  <label htmlFor={id3} className="space-x-2 cursor-pointer">
                    <input type="checkbox" id={id3} />
                    <span>Remember me?</span>
                  </label>

                  <p className="cursor-pointer">Need help!</p>
                </div>
              </div>
            </form>

            <div className="text-gray-500">
              Already subscribed to Netflix?{" "}
              <Link to="/signin" className="text-gray-300 font-semibold">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
