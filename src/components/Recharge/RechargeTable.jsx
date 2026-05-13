import React, { useEffect, useState } from "react";
import axios from "axios";

export default function RechargeTable() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/recharge")
      .then(res => setPlans(res.data))
      .catch(err => console.error(err));
  }, []);

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
          {plans.map((p, i) => (
            <tr key={i}>
              <td>₹{p.amount}</td>
              <td className="bonus">₹{p.bonus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}