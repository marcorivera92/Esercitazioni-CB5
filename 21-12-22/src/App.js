import "./App.css";
import { Button } from "./components/button/Button";
import { Text } from "./components/text/Text";

function App() {
  return (
    <div className="App">
      <Text as="h1" variant="title">
        This is your last chance.
      </Text>

      <div>
        <img
          className="header_img"
          src="/_images/morpheus.webp"
          alt="Morpheus"
        />
      </div>
      <Button
        variant="red"
        onClick={() =>
          console.log(
            '"You stay in Wonderland, and I show you how deep the rabbit hole goes."'
          )
        }
      >
        Red Pill
      </Button>
      <Button
        variant="blue"
        onClick={() =>
          console.log(
            '"The story ends, you wake up in your bed and believe whatever you want to believe."'
          )
        }
      >
        Blue Pill
      </Button>
    </div>
  );
}

export default App;
