import { useState } from "react";
import "./App.css";
import { Beers } from "./components/beer-graphic/Beers";
import { BloodTypes } from "./components/blood-types/BloodTypes";
import { CreditCards } from "./components/credit-cards/CreditCards";
import { Users } from "./components/users/Users";

function ComponentForm(props) {
  const { selectHandler } = props;

  return (
    <form>
      <select value={""} onChange={selectHandler} className="form-select">
        <option selected disabled value="">
          Choose an option
        </option>
        <option value="beers">Beers</option>
        <option value="creditCards">Credit Cards</option>
        <option value="bloodTypes">Blood Types</option>
        <option value="users">Users</option>
      </select>
    </form>
  );
}

const componentsMap = {
  beers: Beers,
  creditCards: CreditCards,
  bloodTypes: BloodTypes,
  users: Users,
  default: function () {
    return <div></div>;
  },
};

function App() {
  const [componentToRender, setComponentToRender] = useState("default");
  const selectHandler = (e) => {
    setComponentToRender(e.target.value);
  };

  const DynamicComponent = componentsMap[componentToRender];

  return (
    <div className="App">
      <ComponentForm selectHandler={selectHandler} />
      <DynamicComponent />

      <div className="hero">{componentToRender}</div>
    </div>
  );
}

export default App;
