import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { AddProductToCart } from '../../features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Container(props) {
    const dispatch = useDispatch()


    const navigate = useNavigate()
    const handleOrderNow = () => {
        navigate(`/menu/${props.items.id}`);
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };

    const handleAddToCart = (item) => {

        const user = JSON.parse(localStorage.getItem("authUser"))

        if (!user) {
            alert("Please login to add items to cart")
            navigate("/")
            return
        }

        dispatch(AddProductToCart(item))

    }

    return (
        <div>
            <Card className='cardDetails' >
                <Card.Img variant="top" src={props.items.image} />
                <Card.Body>
                    <Card.Title>{props.items.title}</Card.Title>
                    <Card.Text>
                        ₹ {props.items.price} /-
                    </Card.Text>
                    <Card.Text>
                        ⭐ {props.items.rating.toFixed(1)} {props.items.reviewCount ? `(${props.items.reviewCount} reviews)` : ''}
                    </Card.Text>

                    <Button onClick={handleOrderNow}>View</Button><br />
                    <br />
                    <Button variant="primary" className='cardButton' onClick={() =>
                        handleAddToCart({
                            id: props.items.id,
                            name: props.items.title,
                            price: Number(props.items.price),
                            image: props.items.image,
                            quantity: 1
                        })
                    }>Add</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Container
