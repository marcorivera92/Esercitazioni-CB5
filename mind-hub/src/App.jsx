import "./App.css";
import HeaderMobile from "./components/header-mobile/HeaderMobile";
import Feed from "./components/feed/index";
import FooterMobile from "./components/footer-mobile/FooterMobile";
import FriendsList from "./components/stories-section/FriendsList";

function App() {
  return (
    <div className="App">
      <HeaderMobile />
      <FriendsList />
      <Feed className="feedSection" />
      <FooterMobile className="footer" />
    </div>
  );
}

export default App;
