import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./cart.css"
import Button from 'react-bootstrap/esm/Button'
import { clearCart, DecreaseProductQty, AddProductToCart } from '../../features/cart/cartSlice'
import { useNavigate } from 'react-router-dom'




function Cart() {

    const cartItems = useSelector(state => state.cart.value)

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleOrderNow = () => {
        navigate('/menu');
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };
     const handleCartNow = () => {
        navigate('/checkout');
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };


    return (
        <>
            <section>

                <div className='mt-[15px]'>
                    <h1 className='Heading'>Cart Items</h1>
                    <hr className='line' />



                    {cartItems.length === 0 ? (
                        <p className='cart1'>No items in cart</p>
                    ) : (
                        cartItems.map((item, idx) => (

                            <>
                                <div>
                                    <div key={idx} className='cartContainer'>

                                        <div className='cart1'>
                                            <img src={item.image} alt="" />
                                            <h4>{item.name}</h4>

                                        </div>

                                        <div className='cart2'>


                                            <button
                                                className="qtyBtn"
                                                onClick={() => dispatch(DecreaseProductQty({ id: item.id }))}
                                            >
                                                -
                                            </button>


                                            <span className="qtyValue">{item.quantity}</span>


                                            <button
                                                className="qtyBtn"
                                                onClick={() =>
                                                    dispatch(
                                                        AddProductToCart({
                                                            id: item.id,
                                                            name: item.name,
                                                            price: item.price,
                                                            image: item.image,
                                                        })
                                                    )
                                                }
                                            >
                                                +
                                            </button>


                                            <p>Qty: {item.quantity}</p>
                                            <p>Price: ₹{item.price} </p>
                                            <p>Total Price: ₹{item.totalPrice}</p>

                                        </div>


                                    </div>
                                    <div className='cart2'><hr /></div>

                                </div>


                            </>

                        )))}

                    <div className='cartButtons'>

                        <Button variant='danger' onClick={() => dispatch(clearCart())}>Clear Cart</Button>
                        <div className='cartButtons'>
                        <Button variant='primary' onClick={ handleOrderNow}>← Back</Button>
                        <Button variant='primary' onClick={handleCartNow}>Buy</Button>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Cart
