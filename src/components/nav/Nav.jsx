import "./nav.css";

import tree from "./../../assets/tree.svg";
import bell from "./../../assets/bell.svg";
import user from "./../../assets/person.svg";
import sIcon from "./../../assets/search-icon.svg";

export default function Nav(props) {
  return (
    <>
      <div className="navbar">
        <div className="nav-title">
          <h1>{props.title}</h1>
          <div className="input-field">
            <img src={sIcon} alt="" />
            <input
              type="search"
              name="search"
              id="search"
              className="search"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="nav-info">
          <div className="nav-stat">
            <img src={tree} alt="tree" />
            <p>0 Planted</p>
            <img src={bell} alt="bell" />
          </div>
          <div className="nav-user">
            <div className="user-img">
              <img src={props.image} alt="user" />
            </div>
            <div className="user-detail">
              <h6>Verified</h6>
              <p>{props.username}</p>
            </div>
            <div className="dropdown">
              <i className="fas fa-angle-down"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
