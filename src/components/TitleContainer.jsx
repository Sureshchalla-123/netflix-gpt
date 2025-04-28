import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";

const TitleContainer = ({ title, discription }) => {
  return (
    <div className="w-screen h-screen absolute  z-3000 ">
      <div className="pt-48 pl-16 w-1/3">
        <h1 className="text-3xl font-bold text-white pb-3">{title}</h1>
        <p className="text-sm text-white pt-2">{discription}</p>
        <div className="flex items-center gap-3">
          <button className="bg-red-700 text-white px-4 py-2 rounded font-bold mt-4 h-12 flex items-center gap-2">
            <FaPlay />
            Play
          </button>
          <button className="bg-gray-300 text-black px-4 py-2 rounded font-bold mt-4 h-12 ml-3 flex items-center gap-2">
            <IoIosInformationCircle />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default TitleContainer;
