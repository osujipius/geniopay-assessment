import "./refer.css";
import mic from "./../../assets//mic.svg";

export default function Refer() {
  return (
    <div className="refer">
      <div className="d-flex">
        <img src={mic} alt="" />
        <div className="refer-info">
          <h4>Refer and earn</h4>
          <p>
            Use the below link to
            <br /> invite friends
          </p>
        </div>
      </div>
      <button style={{ cursor: "pointer" }}>Invite Friends</button>
    </div>
  );
}
