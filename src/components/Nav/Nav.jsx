import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

function Nav() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="flex items-center justify-between w-full p-5 z-[100] absolute top-0 left-0">
      <Link to="/">
        <img src="/logo.png" alt="logo" width={120} />
      </Link>

      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="bg-transparent text-white font-medium text-base px-5 py-2 rounded">
              Account
            </button>
          </Link>

          <button
            onClick={handleLogOut}
            className="bg-primary text-white font-medium text-base px-5 py-2 rounded"
          >
            Sign out
          </button>
        </div>
      ) : (
        <div>
          <Link to="/signin">
            <button className="bg-transparent text-white font-medium text-base px-5 py-2 rounded">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-primary text-white font-medium text-base px-5 py-2 rounded">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Nav;
