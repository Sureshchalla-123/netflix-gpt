import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  if (!user) {
    return;
  }

  const { displayName, photoURL } = user;

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
    <div className="absolute w-full top-0 left-0 ">
      <div className="flex justify-between items-center px-8 pt-2">
        <div>
          <img className="w-[200px]" src={LOGO} alt="logo" />
        </div>
        <div className="flex  gap-3 rounded">
          <div className="flex flex-col items-center">
            <img
              src={photoURL}
              className="h-10 w-10 rounded-[50%] border-[5px] border-red-500"
              alt="profile"
            />
            <p className="text-red-500 font-bold">{displayName}</p>
          </div>
          <button
            onClick={handleSignOut}
            className="text-white bg-red-700 px-4 py-2 rounded font-bold h-12"
          >
            Signout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
