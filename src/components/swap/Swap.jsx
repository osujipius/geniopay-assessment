import "./swap.css";

import flag from "../../assets/us-flag.svg";
import flag2 from "../../assets/eur-flag.svg";
import arrow from "../../assets/send2.svg";

export default function Swap() {
  return (
    <div className="swap">
      <div className="swap-info">
        <div>
          <p>Amount</p>

          <input type="text" name="" id="" placeholder="$0.00" />

          <p>
            <span style={{ fontWeight: "400" }}>Exchange rate:</span> $1 = N20
          </p>
        </div>
        <div>
          <p>From</p>
          <div className="input-field">
            <img src={flag} alt="usa-flag" />
            <select name="" id="">
              <option value="">USD US Dollar</option>
            </select>
          </div>
          <p>
            <span style={{ fontWeight: "400" }}>You send:</span> $0.00
          </p>
        </div>
        <div>
          <p>To</p>
          <div className="input-field">
            <img src={flag2} alt="eur-flag" />
            <select name="" id="">
              <option value="">EUR Euro</option>
            </select>
          </div>
          <p>
            <span style={{ fontWeight: "400" }}>They receive:</span> €0.00
          </p>
        </div>
      </div>
      <div className="convert">
        fees:
        <span style={{ fontWeight: "bold", fontSize: "18px" }}>$0.00</span>
        <button>
          <img
            style={{ height: "20px", marginBottom: "-5px" }}
            src={arrow}
            alt=""
          />
          Convert & Send
        </button>
      </div>
    </div>
  );
}
