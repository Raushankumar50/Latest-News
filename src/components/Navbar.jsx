import { useState } from "react";

const Navbar = ({ search, handleInput, getData }) => {
  const [menuOpen, setMenuOpen] = useState(false); // ✅ required

  return (
    <>
      <nav className="bg-white shadow-md px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-2 rounded-full text-xl font-bold">
              <img
                src="./latest-news.png"
                className="rounded-full h-8"
                alt="News Logo"
              />
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide">
              <span className="text-sky-700">Latest</span>{" "}
              <span className="text-indigo-700">News</span>
            </h1>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)} // ✅ works now
          >
            ☰
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-4">
              <a className="font-semibold text-lg text-gray-700 cursor-pointer hover:text-blue-600">
                All News
              </a>
              <a className="font-semibold text-lg text-gray-700 cursor-pointer hover:text-blue-600">
                Trending
              </a>
            </ul>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search News"
                value={search}
                onChange={handleInput}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={getData}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-3">
            <a className="font-semibold text-gray-700 hover:text-blue-600">
              All News
            </a>
            <a className="font-semibold text-gray-700 hover:text-blue-600">
              Trending
            </a>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Search News"
                value={search}
                onChange={handleInput}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={getData}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Search
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
