import "./App.css";
import { Beers } from "./components/beer-graphic/Beers";
import { CreditCards } from "./components/credit-cards/CreditCards";

function App() {
  return (
    <div className="App">
      <CreditCards />
      <hr />
      <Beers />
    </div>
  );
}

export default App;
