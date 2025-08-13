import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const [search, setSearch] = useState("");
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = "ecfb5d876e464091a77bcbd5f6956427";

  const getData = async (query = search) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
      );
      const jsonData = await response.json();
      const dt = jsonData.articles.slice(0, 12);
      setNewsData(dt);
    } catch (err) {
      console.error("API error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData("latest");
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const userInput = (e) => {
    const category = e.target.value;
    setSearch(category);
    getData(category); // Pass category directly
  };

  return (
    <>
      <Navbar
        search={search}
        handleInput={handleInput}
        getData={() => getData()}
      />

      <div className="flex flex-wrap gap-4 justify-center my-4">
        <button
          onClick={userInput}
          value="sports"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Sports
        </button>
        <button
          onClick={userInput}
          value="politics"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Politics
        </button>
        <button
          onClick={userInput}
          value="entertainment"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Entertainment
        </button>
        <button
          onClick={userInput}
          value="health"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Health
        </button>
        <button
          onClick={userInput}
          value="fitness"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Fitness
        </button>
      </div>

      <div>
        {loading ? (
          <p className="text-center text-gray-600 mt-4">Loading...</p>
        ) : (
          newsData && <Card data={newsData} />
        )}
      </div>
    </>
  );
}

export default App;
