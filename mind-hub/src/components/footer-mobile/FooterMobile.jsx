import HomeIcon from "@mui/icons-material/Home";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CameraEnhanceOutlinedIcon from "@mui/icons-material/CameraEnhanceOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import "./index.css";

const FooterMobile = () => {
  return (
    <div className="FooterMobile">
      <div className="footer-menu">
        <HomeIcon
          fontSize="medium"
          sx={{ fontSize: "1.8rem" }}
          className="home-icon"
        />
        <SearchOutlinedIcon
          fontSize="medium"
          sx={{ fontSize: "1.8rem" }}
          className="search-icon"
        />
        <CameraEnhanceOutlinedIcon
          fontSize="medium"
          sx={{ fontSize: "1.8rem" }}
          className="camera-icon"
        />
        <NotificationsNoneOutlinedIcon
          fontSize="medium"
          sx={{ fontSize: "1.8rem" }}
          className="notification-icon"
        />
        <MailOutlineOutlinedIcon
          fontSize="medium"
          sx={{ fontSize: "1.8rem" }}
          className="chat-icon"
        />
      </div>
    </div>
  );
};

export default FooterMobile;
