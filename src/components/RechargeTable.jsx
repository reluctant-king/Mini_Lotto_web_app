import React from "react";
import "./rechargeTable.css";

export default function RechargeTable() {

const data = [
  { recharge: "₹100", bonus: "₹10" },
  { recharge: "₹500", bonus: "₹15" },
  { recharge: "₹1,000", bonus: "₹25" },
  { recharge: "₹3,000", bonus: "₹50" }
];

return (
  <div className="recharge-card">

    <h3 className="table-title">Recharge Bonus</h3>

    <table className="recharge-table">

      <thead>
        <tr>
          <th>Recharge</th>
          <th>Bonus</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.recharge}</td>
            <td className="bonus">{item.bonus}</td>
          </tr>
        ))}
      </tbody>

    </table>

  </div>
);
}