import { useState, useEffect } from "react";
import { GET } from "../../utils/http";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./index.css";

const WidgetBar = () => {
  const [widgetData, setWidgetData] = useState([]);

  useEffect(() => {
    GET(`posts`).then(({ posts }) => setWidgetData(posts));
  }, []);

  return (
    <div className="WidgetBar">
      <div className="widgets__input">
        <SearchOutlinedIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widget-content">
        <h3 className="widget-title"> Trends for you </h3>

        {widgetData.map((post) => (
          <div className="trends-wrapper">
            <p>Trending Worldwide</p>
            <h4 data={post} key={post.id}>
              #{post.tags}
            </h4>
            <p>{post.reactions}.000+ Tweets</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default WidgetBar;
