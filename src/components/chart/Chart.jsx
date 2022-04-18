import "./chart.css";

export default function Chart() {
  return (
    <div className="chart">
      <div className="chart-nav">
        <div
          className="chart-nav-item"
          style={{
            backgroundColor: "#fff",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
          }}
        >
          Live Rates
        </div>
        <div className="chart-nav-item">Other Companies Rate</div>
      </div>
    </div>
  );
}
