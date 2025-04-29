import React from "react";
import { POSTER_CDN } from "../utils/constants";

const ItemList = ({ title, data }) => {
  return (
    <div className="pl-3 ">
      <h1 className="text-white pb-2 text-2xl font-bold">{title}</h1>
      <div className="flex gap-4 overflow-x-scroll scrollbar-hide ">
        {data &&
          data.map((movie) => (
            <img
              src={POSTER_CDN + movie.poster_path}
              alt={movie.title}
              key={movie.id}
              className="w-[120px] h-[230px] object-cover rounded-lg transition-transform duration-300 hover:-translate-y-1 "
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
