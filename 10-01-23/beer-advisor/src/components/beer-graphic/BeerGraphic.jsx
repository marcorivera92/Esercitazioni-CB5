import "./beer-graphic.css";

export function BeerGraphic() {
  return (
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
  );
}
