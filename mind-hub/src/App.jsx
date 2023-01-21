import { useState } from "react";
// import useLocalStorage from "use-local-storage";
import HeaderMobile from "./components/header-mobile/HeaderMobile";
import Feed from "./components/feed/index";
import FooterMobile from "./components/footer-mobile/FooterMobile";
import FriendsList from "./components/stories-section/FriendsList";
import Modal from "./components/modal/Modal";
import NewPostMobile from "./components/newpost-mobile/NewPostMobile";
import Sidebar from "./components/sidebar/Sidebar";
// Icons & Style
import AddIcon from "@mui/icons-material/Add";
import "./App.css";
import WidgetBar from "./components/widget-bar/WidgetBar";

function App() {
  const [isModalActive, setModalActive] = useState(false);

  // EVENTS
  const modalHandler = () => setModalActive((prev) => !prev);

  return (
    <div className="App">
      <div className={`modal-mobile ${isModalActive ? "modal-active" : ""}  `}>
        {isModalActive && (
          <Modal>
            <NewPostMobile setModalActive={setModalActive} />
          </Modal>
        )}
      </div>
      <HeaderMobile />
      <FriendsList />
      <Sidebar />
      <Feed />
      <WidgetBar />
      <FooterMobile />
      <button onClick={modalHandler} className="btn-post__mobile">
        <AddIcon fontSize="medium" sx={{ fontSize: "1.6rem" }} />
      </button>
    </div>
  );
}

export default App;
