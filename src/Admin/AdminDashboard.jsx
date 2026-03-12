function AdminDashboard() {

  const products = JSON.parse(localStorage.getItem("products")) || []
  const orders = JSON.parse(localStorage.getItem("orders")) || []

  const totalProducts = products.length
  const totalOrders = orders.length

  const revenue = orders.reduce((total, order) => {
    return total + order.price * order.quantity
  }, 0)

  return (
    <div className="dashboard-container">

      <h1 className="dashboard-title">Dashboard</h1>

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <h3>Total Products</h3>
          <p>{totalProducts}</p>
        </div>

        <div className="dashboard-card">
          <h3>Total Orders Today</h3>
          <p>{totalOrders}</p>
        </div>

        <div className="dashboard-card">
          <h3>Revenue Today</h3>
          <p>₹{revenue}</p>
        </div>

      </div>

    </div>
  )

}

export default AdminDashboard