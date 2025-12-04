// src/components/checkout/Checkout.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import "./checkout.css"
import { useNavigate } from 'react-router-dom';




function Checkout() {

  const cartItems = useSelector(state => state.cart.value);
  const navigate = useNavigate();

  const [showSuccess, setShowSuccess] = useState(false);

  const handleOrderNow = () => {
    navigate('/cart');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };


  const totalAmount = cartItems.reduce(
    (sum, item) => sum + Number(item.totalPrice || item.price * item.quantity),
    0
  );

  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMethod: 'cod',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = e => {
    e.preventDefault();
    if (!cartItems.length) return alert('Your cart is empty.');

    // show success modal instead of browser alert
    setShowSuccess(true);

    // optional: auto-hide after 3s
    setTimeout(() => setShowSuccess(false), 3000);
  };


  return (
    <>
      <section className="checkoutSection">
        <h1 className="Heading">Checkout</h1>
        <hr className="line" />

        {/* Order summary */}
        <div className="checkout-summary">
          <h3>Order Summary</h3>
          {cartItems.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <>
              <ul>
                {cartItems.map((item, idx) => (
                  <li key={idx}>
                    {item.name} x {item.quantity} – ₹{item.totalPrice || item.price}
                  </li>
                ))}
              </ul>
              <p><strong>Total:</strong> ₹{totalAmount}</p>
            </>
          )}
        </div>

        {/* Delivery form */}
        <form className="checkout-form" onSubmit={handlePlaceOrder}>
          <h3>Delivery Details</h3>

          <label>
            Name
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Address
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Payment Method
            <select
              name="paymentMethod"
              value={form.paymentMethod}
              onChange={handleChange}
            >
              <option value="cod">Cash on Delivery</option>
              <option value="card">Card on Delivery</option>
            </select>
          </label>
          <div className='checkoutButtons'>
            <div>
              <Button type="submit" variant="primary" disabled={!cartItems.length}>
                Place Order
              </Button>
            </div>
            <div className='checkoutButton2'>
              <Button onClick={handleOrderNow} >
                ← Back
              </Button>
            </div>
          </div>
        </form>
      </section>

      {
        showSuccess && (
          <div className="success-backdrop" onClick={() => setShowSuccess(false)}>
            <div
              className="success-card"
              onClick={e => e.stopPropagation()}
            >
              <div className="success-icon">
                <span>✔</span>
              </div>
              <h2>Order placed!</h2>
              <p>Thank you, {form.name || 'Guest'}.</p>
              <p className="success-total">Total: ₹{totalAmount}</p>
              <button
                className="btn-primary"
                onClick={() => setShowSuccess(false)}
              >
                OK
              </button>
            </div>
          </div>
        )
      }
    </>

  );
}

export default Checkout;
