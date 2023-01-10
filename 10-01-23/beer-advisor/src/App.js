import "./App.css";
import { useEffect, useState } from "react";
import { BeerGraphic } from "./components/beer-graphic/BeerGraphic";

const API_ENDPOINT = {
  BASE_URL: `https://random-data-api.com/api/v2`,

  get BEERS() {
    return `${this.BASE_URL}/beers`;
  },
};

function GenerateBeers() {
  const [randomBeer, setRandomBeer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBeer = () => {
    setLoading(true);
    setError(null);

    fetch(API_ENDPOINT.BEERS)
      .then((res) => res.json())
      .then((beer) => {
        setRandomBeer(beer);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchBeer();
  }, []);

  return { randomBeer, loading, setLoading, error, fetchBeer };
}

function App() {
  const { randomBeer, loading, error, fetchBeer } = GenerateBeers();

  if (loading) {
    return "Loading...";
  }

  if (error || !randomBeer) {
    return "Cannot estabilish connection to the server, refresh the page!";
  }

  const { id, brand, name, style, alcohol } = randomBeer;

  return (
    <div className="App">
      <h1 className="header-title">Beer Generator</h1>

      <div className="beer-info">
        <h4>Beer code: #{id}</h4>
        <h3>
          Brand: {brand} - {name}
        </h3>
        <h3>
          Style: {style} - {alcohol}
        </h3>
      </div>

      <div className="btn">
        <button onClick={() => fetchBeer()}> Generate Beer🍺 </button>
        <BeerGraphic />
      </div>
    </div>
  );
}

export default App;
