// src/admin/AdminOrders.jsx
import { useState } from "react";

const initialOrders = [
  { id: 101, customer: "Arun", total: 950, status: "pending" },
  { id: 102, customer: "Meera", total: 450, status: "preparing" },
];

function AdminOrders() {
  const [orders, setOrders] = useState(initialOrders);

  const updateStatus = (id, status) =>
    setOrders(
      orders.map((o) => (o.id === id ? { ...o, status } : o))
    );

  return (
    <div>
      <h1>Orders</h1>
      <table>
        <thead>
          <tr>
            <th>#</th><th>Customer</th><th>Total</th><th>Status</th><th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.customer}</td>
              <td>₹ {o.total}</td>
              <td>{o.status}</td>
              <td>
                <select
                  value={o.status}
                  onChange={(e) => updateStatus(o.id, e.target.value)}
                >
                  <option value="pending">Pending</option>
                  <option value="preparing">Preparing</option>
                  <option value="delivered">Delivered</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminOrders;
