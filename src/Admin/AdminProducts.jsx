// src/admin/AdminProducts.jsx
import { useState } from "react";

const initialProducts = [
  { id: 1, name: "Detroit-style pizza", price: 900, category: "Pizza" },
  { id: 2, name: "Veggie Burger", price: 250, category: "Burger" },
];

function AdminProducts() {
  const [products, setProducts] = useState(initialProducts);
  const [form, setForm] = useState({ name: "", price: "", category: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.name || !form.price) return;
    setProducts([
      ...products,
      { id: Date.now(), name: form.name, price: Number(form.price), category: form.category },
    ]);
    setForm({ name: "", price: "", category: "" });
  };

  const handleDelete = (id) =>
    setProducts(products.filter((p) => p.id !== id));

  return (
    <div>
      <h1>Products</h1>

      <form onSubmit={handleAdd}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
        />
        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
        />
        <button type="submit">Add product</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th><th>Category</th><th>Price</th><th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>₹ {p.price}</td>
              <td>
                <button onClick={() => handleDelete(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminProducts;
