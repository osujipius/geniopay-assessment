import "./paymentcard.css";

import currency from "../../assets/currency.svg";

export default function PaymentCard(props) {
  return (
    <div className="card">
      <div className="card-head">
        <div className="card-title">
          <img src={currency} alt="currency" />
          <p>Cameron Williamson</p>
        </div>
        <div className="ellipsis">
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </div>
      <div className="card-body">
        <h5>PL9XXXXXXXXXXXX775</h5>
        <div className=" sub-body">
          <p>Cameron Williamson</p>
          <h6>{props.currency}</h6>
        </div>
      </div>
      <hr className="card-divide" />
      <div className="card-bottom">
        <div>
          <p>
            <i className="fas fa-paper-plane"></i> Pay
          </p>
        </div>
        <div>
          <p>
            <i className="fas fa-user-friends"></i> Set as default
          </p>
        </div>
        <div>
          <p style={{ color: "red" }}>
            <i className="far fa-trash-alt" style={{ color: "red" }}></i> Remove
          </p>
        </div>
      </div>
    </div>
  );
}
