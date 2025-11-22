import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Juice() {
    return (
        <>
            <section>
                <br />
                
                <h3 className='subHeading'>Juices</h3>
                <div className='dessertsContainer'>
                    <Card >
                        <Card.Img variant="top" src="https://images.pexels.com/photos/96620/pexels-photo-96620.jpeg" />
                        <Card.Body>
                            <Card.Title>Orange juice</Card.Title>
                            <Card.Text>
                                Price: ₹ 125 /-
                            </Card.Text>
                            <Card.Text>
                                Orange juice is arguably the most popular juice worldwide, known for its vibrant colour and refreshing taste. Rich in vitamin C, it boosts the immune system
                            </Card.Text>
                            <Button variant="primary">Add To Cart</Button>
                        </Card.Body>
                    </Card>
                    <Card >
                        <Card.Img variant="top" src="https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg" />
                        <Card.Body>
                            <Card.Title>Lime Juice</Card.Title>
                            <Card.Text>
                                Price: ₹ 150 /-
                            </Card.Text>
                            <Card.Text>
                                The main ingredient for lime juice is fresh limes. Depending on the desired recipe, you can also add water, a sweetener (like sugar or honey), and other optional ingredients such as salt, mint leaves, or black salt to taste.
                            </Card.Text>
                            <Button variant="primary">Add To Cart</Button>
                        </Card.Body>
                    </Card>
                    <Card >
                        <Card.Img variant="top" src="https://images.pexels.com/photos/2110927/pexels-photo-2110927.jpeg" />
                        <Card.Body>
                            <Card.Title>Strawberry Juice</Card.Title>
                            <Card.Text>
                                Price: ₹ 200 /-
                            </Card.Text>
                            <Card.Text>
                                Strawberries are a broadly developed half-breed species of the class Fragaria, collectively known as the strawberries, designed worldwide
                            </Card.Text>
                            <Button variant="primary">Add To Cart</Button>
                        </Card.Body>
                    </Card>
                    <Card >
                        <Card.Img variant="top" src="https://images.pexels.com/photos/593126/pexels-photo-593126.jpeg" />
                        <Card.Body>
                            <Card.Title>Pista Badam Milk</Card.Title>
                            <Card.Text>
                                Price: ₹ 200 /-
                            </Card.Text>
                            <Card.Text>
                                A rich and nutty option, this variation incorporates ground pistachios along with almonds, sometimes with added flavorings like cardamom or saffron for an extra layer of taste.
                            </Card.Text>
                            <Button variant="primary">Add To Cart</Button>
                        </Card.Body>
                    </Card>

                </div>
                <hr />
            </section>
        </>
    )
}

export default Juice
