import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from './Container'


export const burgerData = [
    {
        id: "burger1",
        image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg",
        title: "Smash Burger",
        price: "250",
        description: "A burger where a ball of ground meat is smashed onto a hot griddle, resulting in a thin, crispy patty and caramelized edges.",
        rating: 4.8,      // new
        reviewCount: 120, // optional
    },
    {
        id: "burger2",
        image: "https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg",
        title: "Chicken Burger",
        price: "300",
        description: " A burger featuring a patty made from ground chicken, which can be grilled or fried.",
        rating: 4.5,
        reviewCount: 80,
    },
    {
        id: "burger3",
        image: "https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg",
        title: "Veggie Burger",
        price: "400",
        description: " A burger patty made from plant-based ingredients like vegetables, grains, or black beans, appealing to vegetarians and health-conscious individuals.",
         rating: 4.5,
        reviewCount: 80,
    },
    {
        id: "burger4",
        image: "https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg",
        title: "Cheeseburger",
        price: "450",
        description: "A classic burger with a beef patty topped with melted cheese and often includes lettuce, tomato, onion, and pickles.",
         rating: 4.3,
        reviewCount: 100,
    },
    // all other burgers
];


function Burger() {

    const [burgers, setBurgers] = useState(burgerData)
    return (
        <>
            <section>
                <br />

                <div className='itemsContainer'>

                    {burgers.map((burger, index) => {
                        return (
                            <Container items={burger} key={index} />
                        )
                    })}
                </div>
                <hr className='line' />
            </section>
        </>
    )

}

export default Burger

