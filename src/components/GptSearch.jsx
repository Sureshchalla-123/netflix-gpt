import React from "react";

const gptSearch = () => {
  return (
    <div className="absolute top-0 left-0 h-screen w-full bg-black text-white">
      <div className="flex flex-row items-center justify-center mt-20 gap-4">
        <input
          type="text"
          placeholder="Type your query..."
          className="w-100 p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className=" p-2 bg-blue-600 rounded hover:bg-blue-700 transition duration-200">
          Search
        </button>
      </div>
    </div>
  );
};

export default gptSearch;
