import "./transactions.css";

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
    </div>
  );
}
