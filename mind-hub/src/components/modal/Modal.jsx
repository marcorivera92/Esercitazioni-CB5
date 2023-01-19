import ActionsBar from "../actions-bar/ActionsBar";
import "./index.css";

const Modal = ({ children }) => {
  return (
    <div className="Modal">
      <div className="modal-content">
        {children}
        <ActionsBar />
      </div>
      {/* <div className="modal-overlay"></div> */}
    </div>
  );
};

export default Modal;
