import TwitterIcon from "@mui/icons-material/Twitter";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import "./index.css";

const HeaderMobile = () => {
  return (
    <div className="HeaderMobile">
      <img
        src="https://api.dicebear.com/5.x/bottts/svg?seed=Loki"
        alt="avatar"
        className="user_avatar--header"
      />
      <TwitterIcon
        className="twitter-icon"
        fontSize="medium"
        sx={{ fontSize: "1.8rem" }}
      />
      <SettingsOutlinedIcon
        className="settings-icon"
        fontSize="medium"
        sx={{ fontSize: "1.8rem" }}
      />
    </div>
  );
};

export default HeaderMobile;
