import React, { useRef, useState } from "react";
import { checkLoginData, checkSignUpData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { AVATAR_URL, LOGO } from "../utils/constants";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  if (user) {
    navigate("/browse");
    return;
  }

  const handleToggleSigin = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    let message;

    if (isLogin) {
      message = checkLoginData(email.current.value, password.current.value);
    } else {
      message = checkSignUpData(
        name.current.value,
        email.current.value,
        password.current.value
      );
    }
    message ? setErrorMsg(message) : setErrorMsg(null);

    if (message) {
      setLoading(false);

      return;
    }

    //signin and signup logic to firebase

    if (!isLogin) {
      //signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: AVATAR_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = user;
              dispatch(addUser({ uid, email, displayName, photoURL }));
              setLoading(false);

              navigate("/browse");
            })
            .catch((error) => {
              const errorMessage = error.message;

              setLoading(false);

              setErrorMsg(errorMessage);
            });
        })
        .catch((error) => {
          //const errorCode = error.code;
          const errorMessage = error.message;
          setLoading(false);

          setErrorMsg(errorMessage);
        });
    } else {
      //signin logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          //const user = userCredential.user;
          setLoading(false);

          navigate("/browse");
        })
        .catch((error) => {
          //const errorCode = error.code;
          const errorMessage = error.message;
          setLoading(false);
          setErrorMsg(errorMessage);
        });
    }
  };

  return (
    <div className="relative bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/e8a8e44f-ffcf-490c-ad60-b7febe7736d0/web/IN-en-20250407-TRIFECTA-perspective_0d56dee1-00dd-4425-af41-40aee72b1038_small.jpg)] bg-cover bg-center h-screen ">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-blac/20 h-screen"></div>
      <header>
        <img className="relative h-20 pt-3 px-14" src={LOGO} alt="logo" />
      </header>
      <form
        onSubmit={handleSubmit}
        className="relative w-4/12 flex flex-col mx-auto gap-8 bg-black opacity-80 text-white p-12 rounded-lg min-w-[300px]"
      >
        <h1 className="font-bold text-2xl">{isLogin ? "Login" : "Sign up"}</h1>
        {!isLogin && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 h-10  bg-transparent border-white border-[1px] rounded"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="p-2 h-10  bg-transparent border-white border-[1px] rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-2  h-10 bg-transparent border-white border-[1px] rounded"
        />
        {errorMsg && <p className="text-sm text-red-500">{errorMsg}</p>}
        <button
          type="submit"
          className="bg-red-700 text-white h-10 rounded font-bold"
        >
          {loading ? "Loading..." : isLogin ? "Login" : "Signup"}
        </button>
        <p className="text-white cursor-pointer" onClick={handleToggleSigin}>
          {isLogin ? "New to Netflix? Sign up now." : "Already a User? Login"}
        </p>
      </form>
    </div>
  );
};

export default Login;
