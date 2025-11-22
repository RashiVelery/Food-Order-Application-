import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Burger() {
    return (
        <>
            <section>
                <br />
                <h3 className='subHeading'>Burgers</h3>
                <div className='burgerContainer'>

                    <Card >
                        <Card.Img variant="top" src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg" />
                        <Card.Body>
                            <Card.Title>Smash Burger </Card.Title>
                            <Card.Text>
                                Price: ₹ 250 /-
                            </Card.Text>
                            <Card.Text>
                                A burger where a ball of ground meat is "smashed" onto a hot griddle, resulting in a thin, crispy patty and caramelized edges.
                            </Card.Text>
                            <Button variant="primary">Add To Cart</Button>
                        </Card.Body>
                    </Card>
                    <Card >
                        <Card.Img variant="top" src="https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg" />
                        <Card.Body>
                            <Card.Title>Chicken Burger</Card.Title>
                            <Card.Text>
                                Price: ₹ 300 /-
                            </Card.Text>
                            <Card.Text>
                                A burger featuring a patty made from ground chicken, which can be grilled or fried.
                            </Card.Text>
                           <Button variant="primary">Add To Cart</Button>
                        </Card.Body>
                    </Card>
                    <Card >
                        <Card.Img variant="top" src="https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg" />
                        <Card.Body>
                            <Card.Title>Veggie Burger</Card.Title>
                            <Card.Text>
                                Price: ₹ 400 /-
                            </Card.Text>
                            <Card.Text>
                                A burger patty made from plant-based ingredients like vegetables, grains, or black beans, appealing to vegetarians and health-conscious individuals.
                            </Card.Text>
                            <Button variant="primary">Add To Cart</Button>
                        </Card.Body>
                    </Card>
                    <Card >
                        <Card.Img variant="top" src="https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg" />
                        <Card.Body>
                            <Card.Title> Cheeseburger</Card.Title>
                            <Card.Text>
                                Price: ₹ 450 /-
                            </Card.Text>
                            <Card.Text>
                                A classic burger with a beef patty topped with melted cheese and often includes lettuce, tomato, onion, and pickles.                            </Card.Text>
                           <Button variant="primary">Add To Cart</Button>
                        </Card.Body>
                    </Card>
                    
                </div>
                <hr />
            </section>
        </>
    )
}

export default Burger
