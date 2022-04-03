import "./widget.css";
import top from "./../../assets/widget-top.svg";
import eye from "./../../assets/eye.svg";
import bottom from "./../../assets/s2.svg";

export default function Widget() {
  return (
    <div className="container">
      <div className="widget-info">
        <img style={{ marginLeft: "10px" }} src={top} alt="" />

        <img
          style={{ marginLeft: "30px", marginBottom: "10px" }}
          src={eye}
          alt=""
        />
      </div>
      <hr />
      <div
        className="widget-info"
        style={{ marginTop: "15px", marginBottom: "20px" }}
      >
        <img style={{ marginLeft: "10px" }} src={bottom} alt="" /> <hr />
      </div>
      <a href="#" className="btn">
        Pay-In
      </a>
      <a href="#" className="btn btn-2">
        Pay-Out
      </a>
    </div>
  );
}
