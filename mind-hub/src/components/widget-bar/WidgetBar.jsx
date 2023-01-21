import { useState, useEffect } from "react";
import { GET } from "../../utils/http";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./index.css";

const WidgetBar = () => {
  const [widgetData, setWidgetData] = useState([]);
  const [inputFilter, setInputFilter] = useState("");

  /* FETCH */
  useEffect(() => {
    GET(`posts`).then(({ posts }) => setWidgetData(posts));
  }, []);

  /* EVENTS */
  const onHandleFilter = (e) => {
    e.preventDefault();
    setInputFilter(e.target.value);
  };

  return (
    /* SEARCHBAR */
    <div className="WidgetBar">
      <div className="widgets__input">
        <SearchOutlinedIcon className="widgets__searchIcon" />
        <input
          placeholder="Search Twitter"
          type="text"
          value={inputFilter}
          onChange={onHandleFilter}
        />
      </div>

      {/* CONTENT */}
      <div className="widget-content">
        <h3 className="widget-title"> Trends for you </h3>
        {widgetData
          .filter((post) => {
            const tagsToString = post.tags.join();
            return tagsToString.includes(inputFilter);
          })
          .map((post) => (
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
