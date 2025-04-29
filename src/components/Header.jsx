import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { LOGO } from "../utils/constants";
import { useLocation } from "react-router-dom";
import { setGptPage } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const gptPage = useSelector((store) => store.gpt.gptPage);

  const location = useLocation();
  const canUseBg = location.pathname.includes("/movie/");

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const handleGptPage = () => {
    dispatch(setGptPage(!gptPage));
  };

  return (
    <div
      className={` w-full h-20 relative top-0 left-0 flex justify-between items-center px-8 pt-2 z-10 ${
        canUseBg ? "bg-black" : "bg-transparent"
      } `}
    >
      <div>
        <Link to="/">
          <img className="w-[200px]" src={LOGO} alt="logo" />
        </Link>
      </div>
      {user && (
        <div className="flex items-center  gap-3 rounded">
          <button
            onClick={handleGptPage}
            className="mb-3 relative items-center justify-start inline-block px-3 py-1 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group"
          >
            <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
              {gptPage ? "Home" : "Gpt"}
            </span>
          </button>
          <button
            onClick={handleSignOut}
            className="mb-2 text-black hover:text-white bg-white hover:bg-red-500 px-4 py-1 rounded-[30px] font-semi-bold  cursor-pointer"
          >
            Signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
