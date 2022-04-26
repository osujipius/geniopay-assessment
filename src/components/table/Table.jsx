import { useState } from "react";
import "./table.css";
import MockData from "./MOCK_DATA";

export default function Table() {
  const [data, setdata] = useState(MockData);

  return (
    <div className="table">
      <div className="table-nav">
        <div
          className="table-nav-item"
          style={{
            backgroundColor: "#fff",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
          }}
        >
          Live Rates
        </div>
        <div className="table-nav-item">Other Companies Rate</div>
      </div>
      <div className="table-content">
        <p style={{ margin: "20px" }}>Rates are updated every 5 seconds</p>
        <div className="table-data">
          <table>
            <thead>
              <th>Currency</th>
              <th>Rate</th>
              <th>Change (24hrs)</th>
              <th>Chart (24hrs)</th>
            </thead>
            <tbody>
              {data.map((data) => (
                <tr key={data.id}>
                  <td style={{ display: "flex" }}>
                    <img src={data.img} alt="" />
                    <p>{data.title}</p>
                  </td>
                  <td>{data.rate}</td>
                  <td>{data.change}</td>
                  <td>
                    <img src={data.chart} alt="" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
