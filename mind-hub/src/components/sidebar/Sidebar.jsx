import SidebarOption from "../../atoms/sidebar-option/SidebarOption";

import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

import "./index.css";
import ButtonTweet from "../../atoms/button-tweet";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <TwitterIcon
        className="twitter-icon"
        fontSize="medium"
        sx={{ fontSize: "2rem" }}
      />

      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={TagOutlinedIcon} text="Explore" />
      <SidebarOption
        Icon={NotificationsNoneOutlinedIcon}
        text="Notifications"
      />
      <SidebarOption Icon={MailOutlineOutlinedIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltOutlinedIcon} text="Lists" />
      <SidebarOption Icon={PermIdentityOutlinedIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizOutlinedIcon} text="More" />

      <ButtonTweet variant="wide-variant" />
    </div>
  );
};

export default Sidebar;
