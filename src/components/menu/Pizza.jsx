import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Pizza() {
    return (
        <>
            <section>
                <h1>Catogories</h1>
                <h3 className='subHeading'>Pizzas</h3>
                <div className='pizzaContainer' >

                    <Card >
                        <Card.Img variant="top" src="https://media.istockphoto.com/id/1096509572/photo/pizza-with-mozzarella-cheese-ham-pepper-meat-tomato-sauce-spices-and-fresh-basil-italian.jpg?s=612x612&w=0&k=20&c=2fnstyzV6CMgZgk7mKD8iV362R59hzNHArV3HV6pn7E=" />
                        <Card.Body>
                            <Card.Title>Detroit-style pizza </Card.Title>
                            <Card.Text>
                                Price: ₹ 900 /-
                            </Card.Text>
                            <Card.Text>
                                Detroit-style pizza is a rectangular pan pizza with a thick, crisp, chewy crust. It is traditionally topped to the edges with mozzarella or Wisconsin brick cheese, which caramelizes against the high-sided heavyweight rectangular pan.
                            </Card.Text>
                            <Button variant="primary">Add To Cart</Button>
                        </Card.Body>
                    </Card>
                    <Card >
                        <Card.Img variant="top" src="https://media.istockphoto.com/id/1403266281/photo/heart-bacon-valentine-pizza-with-melting-cheese-tomatoes-ham-for-valentines-day-with.jpg?s=612x612&w=0&k=20&c=iKIfjt6pHMK08PRFBoBA677fvUVctbVExJyjUV0FPhw=" />
                        <Card.Body>
                            <Card.Title>California pizza</Card.Title>
                            <Card.Text>
                                Price: ₹ 750 /-
                            </Card.Text>
                            <Card.Text>
                                California-style pizza is a style of pizza that combines New York and Italian thin crust with toppings from the California cuisine cooking style. Its invention is generally attributed to chef Ed LaDou, and Chez Panisse, in Berkeley, California.
                            </Card.Text>
                            <Button variant="primary">Add To Cart</Button>
                        </Card.Body>
                    </Card>
                    <Card >
                        <Card.Img variant="top" src="https://media.istockphoto.com/id/1204014912/photo/delicious-homemade-pizza-with-sweet-pepper.jpg?s=612x612&w=0&k=20&c=aSTzSaC-RzV_Yuz37UzEXPxmnGcNBJGuA0qT9POFBtA=" />
                        <Card.Body>
                            <Card.Title>Neapolitan pizza</Card.Title>
                            <Card.Text>
                                Price: ₹ 800 /-
                            </Card.Text>
                            <Card.Text>
                                Neapolitan pizza is the classic Italian-style pizza that originated in Naples. It features a thin, soft, and chewy crust.
                            </Card.Text>
                           <Button variant="primary">Add To Cart</Button>
                        </Card.Body>
                    </Card>
                    <Card >
                        <Card.Img variant="top" src="https://media.istockphoto.com/id/1210561171/photo/appetizing-pizza-with-spicy-chorizo-salami-on-wooden-background-in-a-restaurant-italian.jpg?s=612x612&w=0&k=20&c=8fJmjQvy8mKneoQ3A9B25uK3EBZ9xjt2sbeWfw26hh8=" />
                        <Card.Body>
                            <Card.Title>Sicilian pizza</Card.Title>
                            <Card.Text>
                                Price: ₹ 1000 /-
                            </Card.Text>
                            <Card.Text>
                                Another typical Sicilian pizza is the Scacciata, from the Catania side, a stuffed pizza- pizza dough base, toppings and another pizza on top!
                            </Card.Text>
                            <Button variant="primary">Add To Cart</Button>
                        </Card.Body>
                    </Card>
                    <Card >
                        <Card.Img variant="top" src="https://media.istockphoto.com/id/694091842/photo/bacon-chicken-pizza.jpg?s=612x612&w=0&k=20&c=D3GytqiTy8FU6NHV9Ku4WNNBeUBh6LgFv8dlrTWx2D0=" />
                        <Card.Body>
                            <Card.Title>New york style pizza</Card.Title>
                            <Card.Text>
                                Price: ₹ 800 /-
                            </Card.Text>
                            <Card.Text>
                                New York–style pizza is a pizza made with a characteristically large hand-tossed thin crust, often sold in wide slices to go. The crust is thick and crisp only along its edge, yet soft, thin, and pliable enough beneath its toppings to be folded to eat.
                            </Card.Text>
                            <Button variant="primary">Add To Cart</Button>
                        </Card.Body>
                    </Card>
                     <Card >
                        <Card.Img variant="top" src="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg" />
                        <Card.Body>
                            <Card.Title>Hawaiian pizza</Card.Title>
                            <Card.Text>
                                Price: ₹ 820 /-
                            </Card.Text>
                            <Card.Text>
                               Hawaiian pizza is a pizza invented in Canada, topped with pineapple, tomato sauce, mozzarella cheese, and either ham or bacon.Hawaiian Pizza. A controversial yet beloved option, Hawaiian Pizza features the bold combination of ham and pineapple. 
                            </Card.Text>
                           <Button variant="primary">Add To Cart</Button>
                        </Card.Body>
                    </Card>
                     <Card >
                        <Card.Img variant="top" src="https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg" />
                        <Card.Body>
                            <Card.Title>Roman pizza</Card.Title>
                            <Card.Text>
                                Price: ₹ 1000 /-
                            </Card.Text>
                            <Card.Text>
                                Roman pizza is a style of pizza originating in Rome, but now widespread, especially in central Italy.
                            </Card.Text>
                            <Button variant="primary">Add To Cart</Button>
                        </Card.Body>
                    </Card>
                     <Card >
                        <Card.Img variant="top" src="https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg" />
                        <Card.Body>
                            <Card.Title>Grandma pizza</Card.Title>
                            <Card.Text>
                                Price: ₹ 1100 /-
                            </Card.Text>
                            <Card.Text>
                                Grandma pizza is a distinct thin, rectangular style of pizza attributed to Long Island, New York. Typically topped with cheese and tomato sauce, it is reminiscent of pizzas baked at home by Italian housewives who lacked a pizza oven. 
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

export default Pizza
