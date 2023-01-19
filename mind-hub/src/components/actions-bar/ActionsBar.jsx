import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

import "./index.css";

const ActionsBar = ({ variant }) => {
  return (
    <div
      className={`ActionsBar ${
        variant === "desktop-variant" ? "desktop-variant" : ""
      }`}
    >
      <InsertPhotoOutlinedIcon
        sx={{ fontSize: "1.6rem" }}
        className="icon-one"
      />
      <GifBoxOutlinedIcon sx={{ fontSize: "1.6rem" }} className="icon-two" />
      <BallotOutlinedIcon sx={{ fontSize: "1.6rem" }} className="icon-three" />
      <SentimentSatisfiedOutlinedIcon
        sx={{ fontSize: "1.6rem" }}
        className="icon-four"
      />
      <PendingActionsOutlinedIcon
        sx={{ fontSize: "1.6rem" }}
        className="icon-five"
      />
      <FmdGoodOutlinedIcon sx={{ fontSize: "1.6rem" }} className="icon-six" />
    </div>
  );
};

export default ActionsBar;
