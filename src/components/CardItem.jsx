import React from "react";
import { POSTER_CDN } from "../utils/constants";
import { Link } from "react-router-dom";

const CardItem = ({ data }) => {
  return (
    <Link to={`/movie/${data.id}`} className="cursor-pointer">
      <div className="w-[120px] h-[230px]">
        <img
          src={POSTER_CDN + data.poster_path}
          alt={data.title}
          className="w-[120px] h-[230px] object-cover rounded-lg transition-transform duration-300 hover:-translate-y-1 "
        />
      </div>
    </Link>
  );
};

export default CardItem;
