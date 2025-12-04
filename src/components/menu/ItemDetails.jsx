import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddProductToCart } from '../../features/cart/cartSlice';
import { pizzaData } from './Pizza';
import { burgerData } from './Burger';
import { juiceData } from './Juice';
import { dessertsData } from './Desserts';


const allProducts = [
    ...pizzaData,
    ...burgerData,
    ...juiceData,
    ...dessertsData,
];

function ItemDetails() {
    const { id } = useParams();            // id from URL /menu/:id
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOrderNow = () => {
        navigate('/menu');
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };

    // find the product by id
    const product = allProducts.find(p => String(p.id) === id);

    if (!product) {
        return <p>Product not found.</p>;
    }

    // When user clicks Add to Cart
    const handleAddToCart = () => {
        dispatch(
            AddProductToCart({
                name: product.title,             // cart uses "name"
                price: Number(product.price),    // numeric price
                image: product.image,
                totalPrice: Number(product.price) // quantity 1 => price
            })
        );
    };

    return (
        <section>
            <div>
                <div className='detailsImage'>
                    <img src={product.image} alt={product.title} />
                </div>
                <div className='detailsDiscription'>
                    <h2>{product.title}</h2>
                    <p>Price: ₹ {product.price} /-</p>
                    <p>{product.description}</p>
                    <p>⭐{product.rating}</p>
                </div>
                <div className='detailsButton'>
                    <button onClick={handleAddToCart} className='detailsButton1' >Add to Cart</button>
                    <button className='detailsButton2' onClick={handleOrderNow} > Back to Menu</button>
                </div>
            </div>
        </section>
    );
}


export default ItemDetails
