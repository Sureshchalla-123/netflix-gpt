import React from "react";
import { POSTER_CDN } from "../utils/constants";
import CardItem from "./CardItem";

const ItemList = ({ title, data }) => {
  return (
    <div className="pl-3 ">
      <h1 className="text-white pb-2 text-2xl font-bold">{title}</h1>
      <div className="flex gap-4 overflow-x-scroll scrollbar-hide ">
        {data && data.map((movie) => <CardItem data={movie} key={movie.id} />)}
      </div>
    </div>
  );
};

export default ItemList;
