import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { AddProductToCart } from '../../features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Container(props) {
    const dispatch = useDispatch()

 const cart = useSelector(state => state.cart.value)

 const navigate = useNavigate()
 
   
    return (
        <div>
            <Card className='cardDetails' >
                <Card.Img variant="top" src={props.items.image} />
                <Card.Body>
                    <Card.Title>{props.items.title}</Card.Title>
                    <Card.Text>
                        ₹ {props.items.price} /-
                    </Card.Text>

                    <Button  onClick={() => navigate("/items")}>View</Button><br />
                    <br />
                    <Button variant="primary" className='cardButton' onClick={()=> dispatch(AddProductToCart())}>{props.items.button}</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Container
