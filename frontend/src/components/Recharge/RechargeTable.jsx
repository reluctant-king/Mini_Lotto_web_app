import React, { useEffect, useState } from "react";
import axios from "axios";
import "./rechargeTable.css";

export default function RechargeTable() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/recharge/getrechargeplans")
      .then(res => setPlans(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="recharge-card">
      <h3 className="table-title">Recharge History</h3>

      <table className="recharge-table">
        <thead>
          <tr>
            <th>Amount</th>
            <th>Method</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {plans.map((p, i) => (
            <tr key={i}>
              <td>
                <div className="amount">₹{p.amount}</div>
              </td>

              <td>
                <div className="method">{p.method}</div>
              </td>
              <td data-label="Status">
                <span className={`status ${(p.status || "pending").toLowerCase()}`}>
                  {p.status || "Pending"}
                </span>
              </td>
              <td>
                <div className="date">{p.date}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}