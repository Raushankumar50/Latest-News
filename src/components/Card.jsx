import React from "react";

const Card = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {data.map((curItem, index) => {
        if (!curItem.urlToImage) return null;

        return (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={curItem.urlToImage}
              alt="news"
              className="w-full h-48 object-cover"
            />

            <div className="p-4 flex flex-col justify-between h-56">
              <a
                onClick={() => window.open(curItem.url)}
                className="text-lg font-semibold text-blue-700 hover:underline cursor-pointer mb-2 line-clamp-2"
              >
                {curItem.title}
              </a>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {curItem.description}
              </p>

              <button
                onClick={() => window.open(curItem.url)}
                className="self-start mt-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Read More
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
