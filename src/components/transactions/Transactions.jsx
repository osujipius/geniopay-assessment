import PaymentCard from "../paymentcard/PaymentCard";
import "./transactions.css";

import sIcon from "./../../assets/search-icon.svg";

export default function Transactions() {
  return (
    <div className="transactions">
      <div className="tran-nav">
        <div>
          <p>Own Account</p>
        </div>
        <div>
          <p className="active">Third Party accounts</p>
        </div>
        <div>
          <p>Borderless Recipient</p>
        </div>
        <div>
          <p>Mobile Money Recipients</p>
        </div>
      </div>

      <div className="tran-subnav">
        <div className="subnav-title">
          <p>53 Beneficiaries</p>
        </div>
        <div className="subnav-search">
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

          <div className="sort">
            <p>
              Sort by: <span>All</span> <i className="fas fa-angle-down"></i>
            </p>
          </div>
        </div>
      </div>
      <div className="transaction-grid">
        <PaymentCard currency="EUR" />
        <PaymentCard currency="USD" />
        <PaymentCard currency="EUR" />
        <PaymentCard currency="EUR" />
        <PaymentCard currency="EUR" />
        <PaymentCard currency="EUR" />
        <PaymentCard currency="EUR" />
        <PaymentCard currency="EUR" />
        <PaymentCard currency="EUR" />
      </div>
    </div>
  );
}
