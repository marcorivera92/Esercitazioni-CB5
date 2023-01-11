import "./beer-graphic.css";
import { API_ENDPOINTS } from "../../constants/endpoints";
import { useFetch } from "../../hooks/use-fetch";

export function Beers() {
  const { data, error, loading, refetch } = useFetch(API_ENDPOINTS.BEERS);

  if (loading) return `Loading...`;

  if (error) return `Error!`;

  const { id, brand, name, style, alcohol } = data;

  return (
    <section>
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
        <button onClick={refetch}> Generate Beer🍺 </button>
      </div>

      <div className="whole-glass">
        <div class="container">
          <div class="shadow"></div>
          <div class="mug-of-beer">
            <div class="handle"></div>
            <div class="mug-body"></div>

            <div class="bubbles">
              <div class="bubble beer-bubble"></div>
              <div class="bubble beer-bubble"></div>
              <div class="bubble beer-bubble"></div>
              <div class="bubble beer-bubble"></div>
              <div class="bubble beer-bubble"></div>

              <div class="bubble froth-bubble"></div>
              <div class="bubble froth-bubble"></div>
              <div class="bubble froth-bubble"></div>
            </div>

            <div class="froth">
              <div class="froth-part froth-circle-part"></div>
              <div class="froth-part froth-circle-part"></div>
              <div class="froth-part froth-circle-part"></div>
              <div class="froth-part froth-circle-part"></div>
              <div class="froth-part froth-circle-part"></div>
              <div class="froth-part froth-circle-part"></div>
              <div class="froth-part froth-circle-part"></div>

              <div class="froth-part froth-elongated-part"></div>
              <div class="froth-part froth-elongated-part"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
