// src/admin/AdminProducts.jsx
import { useState } from "react";

const initialProducts = [
  { id: 1, name: "Detroit-style pizza", price: 900, stock: 20 },
  { id: 2, name: "Veggie Burger", price: 250, stock: 15 }
]

function AdminProducts() {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("products")
    return saved ? JSON.parse(saved) : initialProducts
  })

  const [form, setForm] = useState({ name: "", price: "", stock: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.stock) return;
    const newProducts = [
      ...products,
      {
        id: Date.now(),
        name: form.name,
        price: Number(form.price),
        stock: Number(form.stock)
      }
    ]

    setProducts(newProducts)

    localStorage.setItem("products", JSON.stringify(newProducts))
    setForm({ name: "", price: "", category: "" });
  };

  const handleDelete = (id) => {
    const updated = products.filter((p) => p.id !== id)

    setProducts(updated)

    localStorage.setItem("products", JSON.stringify(updated))
  }


  return (
    <div>
      <h1>Products</h1>

      <form onSubmit={handleAdd}>
        <input
          name="name"
          placeholder="Product Name"
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
          name="stock"
          type="number"
          placeholder="Stock"
          value={form.stock}
          onChange={handleChange}
        />
        <button type="submit">Add product</button>
      </form>

      <table className="products-table">

        <thead >
          <tr className="table" >
            <th >Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
       
          {products.map((p) => (
            <tr key={p.id} >
              <td >{p.name}</td>
              <td>₹{p.price}</td>
              <td>{p.stock}</td>
              <td>
                <button  className="delete-btn" onClick={() => handleDelete(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
}

export default AdminProducts;
