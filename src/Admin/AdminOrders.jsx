import { useState, useEffect } from "react";
import './admin.css'
function AdminOrders() {

  const [orders, setOrders] = useState([]);

  // Load orders from localStorage
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  // Update order status
  const updateStatus = (id, status) => {

    const updatedOrders = orders.map((o) =>
      o.id === id ? { ...o, status } : o
    );

    setOrders(updatedOrders);

    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  // Delete order
  const deleteOrder = (id) => {

    const filtered = orders.filter((o) => o.id !== id);

    setOrders(filtered);

    localStorage.setItem("orders", JSON.stringify(filtered));
  };

  return (
    <div className="orders-container">

      <h1>Orders</h1>

      <table className="orders-table">

        <thead>
          <tr>
            <th>#</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Status</th>
            <th>Update</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {orders.length === 0 ? (
            <tr>
              <td colSpan="6">No orders found</td>
            </tr>
          ) : (
            orders.map((o, index) => (
              <tr key={o.id}>

                <td>{index + 1}</td>

                <td>{o.customer}</td>

                <td>₹{o.total}</td>

                <td>{o.status}</td>

                <td>
                  <select
                    value={o.status}
                    onChange={(e) =>
                      updateStatus(o.id, e.target.value)
                    }
                  >
                    <option value="pending">Pending</option>
                    <option value="preparing">Preparing</option>
                    <option value="delivered">Delivered</option>
                  </select>
                </td>

                <td>
                  <button
                    onClick={() => deleteOrder(o.id)}
                    style={{ background: "red", color: "white" }}
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))
          )}

        </tbody>

      </table>

    </div>
  );
}

export default AdminOrders;