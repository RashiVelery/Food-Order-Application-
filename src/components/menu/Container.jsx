import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Container(props) {
    return (
        <div>
            <Card >
                <Card.Img variant="top" src={props.items.image} />
                <Card.Body>
                    <Card.Title>{props.items.title}</Card.Title>
                    <Card.Text>
                        ₹ {props.items.price} /-
                    </Card.Text>
                    <Card.Text>
                        {props.items.description}

                    </Card.Text>
                    <Button variant="primary">{props.items.button}</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Container
