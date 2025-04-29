import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { LOGO } from "../utils/constants";
import { useLocation } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

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

  return (
    <div
      className={` w-full h-20 relative top-0 left-0 flex justify-between items-center px-8 pt-2 z-10 ${
        canUseBg ? "bg-black" : "bg-transparent"
      } `}
    >
      <div>
        <img className="w-[200px]" src={LOGO} alt="logo" />
      </div>
      {user && (
        <div className="flex  gap-3 rounded">
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
