import "./fxnav.css";

export default function FxNav() {
  return (
    <div className="fx-nav">
      <div>
        <p>
          <i className="fas fa-exchange-alt"></i> Balance Exchange
        </p>
      </div>
      <div>
        <p>
          <i className="fas fa-dollar-sign"></i> Forward Rate
        </p>
      </div>
      <div>
        <p
          style={{
            color: "#017189",
            fontWeight: "bold",
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "15px 15px 0 0",
          }}
        >
          <i className="fas fa-paper-plane"></i> Convert & Send
        </p>
      </div>
    </div>
  );
}
