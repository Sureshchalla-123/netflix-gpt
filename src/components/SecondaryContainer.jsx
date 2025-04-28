import React from "react";
import ItemListContainer from "./ItemListContainer";

const SecondaryContainer = () => {
  return (
    <div className="relative mt-[calc(100vh-5rem)] text-white  bg-black h-[170vh]  w-full">
      <ItemListContainer />
    </div>
  );
};

export default SecondaryContainer;
