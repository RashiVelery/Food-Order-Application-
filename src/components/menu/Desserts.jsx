import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Desserts() {
    return (
        <>
            <section>
                <br />
                <h3 className='subHeading'>Desserts</h3>
                <div className='dessertsContainer'>
                    <Card >
                        <Card.Img variant="top" src="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg" />
                        <Card.Body>
                            <Card.Title>Strawberry pie</Card.Title>
                            <Card.Text>
                                Price: ₹ 450 /-
                            </Card.Text>
                            <Card.Text>
                                The main ingredients are fresh strawberries, a pie crust, and a sweetener (often sugar or high fructose corn syrup). Thickeners like cornstarch or gelatin are commonly used to manage moisture.
                            </Card.Text>
                            <Button variant="primary">Add To Cart</Button>
                        </Card.Body>
                    </Card>
                    <Card >
                        <Card.Img variant="top" src="https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg" />
                        <Card.Body>
                            <Card.Title>Tiramisu</Card.Title>
                            <Card.Text>
                                Price: ₹ 300 /-
                            </Card.Text>
                            <Card.Text>
                                Tiramisu is an Italian dessert made of ladyfinger pastries dipped in coffee, layered with a whipped mixture of egg yolks, sugar, and mascarpone, and topped with cocoa powder.
                            </Card.Text>
                            <Button variant="primary">Add To Cart</Button>
                        </Card.Body>
                    </Card>
                    <Card >
                        <Card.Img variant="top" src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg" />
                        <Card.Body>
                            <Card.Title>Apple Pie</Card.Title>
                            <Card.Text>
                                Price: ₹ 350 /-
                            </Card.Text>
                            <Card.Text>
                                apple pie is a pie in which the principal filling is apples. It is often served with whipped cream, ice cream, custard or cheddar cheese. It is generally double-crusted, with pastry both above and below the filling; the upper crust may be solid or latticed.
                            </Card.Text>
                            <Button variant="primary">Add To Cart</Button>
                        </Card.Body>
                    </Card>
                    <Card >
                        <Card.Img variant="top" src="https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg" />
                        <Card.Body>
                            <Card.Title>Chocolate Brownie</Card.Title>
                            <Card.Text>  
                                Price: ₹ 350 /-
                            </Card.Text>
                            <Card.Text>
                                chocolate brownie, or simply a brownie, is a chocolate baked dessert bar. Brownies come in a variety of forms and may be either fudgy or cakey, depending on their density.
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

export default Desserts
