import { Outlet, NavLink, Link } from "react-router-dom";
import "./admin.css"

function AdminLayout() {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2 className="admin-logo">QuickerEats Admin</h2>

        <nav>
          <NavLink to="/admin" end>Dashboard</NavLink>
          <NavLink to="/admin/products">Products</NavLink>
          <NavLink to="/admin/orders">Orders</NavLink>
        </nav>

        {/* back to main website */}
        <div style={{ marginTop: "20px" }}>
          <Link to="/">← Back to website</Link>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-topbar">
          <p>Welcome, Admin</p>
        </header>
        <section className="admin-content">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default AdminLayout;
