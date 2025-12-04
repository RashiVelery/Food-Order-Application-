import React, { useState } from 'react'
import Container from './Container';


export const juiceData = [
    {
        id: "juice1",
        image: "https://images.pexels.com/photos/34879407/pexels-photo-34879407.jpeg",
        title: "Pista Badam Milk",
        price: "200",
        description: " A rich and nutty option, this variation incorporates ground pistachios along with almonds, sometimes with added flavorings like cardamom or saffron for an extra layer of taste.",
         rating: 4.9,
        reviewCount: 100,
    },
    {
        id: "juice2",
        image: "https://images.pexels.com/photos/96620/pexels-photo-96620.jpeg",
        title: "Orange juice",
        price: "125",
        description: " Orange juice is arguably the most popular juice worldwide, known for its vibrant colour and refreshing taste. Rich in vitamin C, it boosts the immune system",
         rating: 4.3,
        reviewCount: 60,
    },
    {
        id: "juice3",
        image: "https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg",
        title: "Lime Juice",
        price: "350",
        description: " The main ingredient for lime juice is fresh limes. Depending on the desired recipe, you can also add water, a sweetener (like sugar or honey), and other optional ingredients such as salt, mint leaves, or black salt to taste.",
         rating: 4.7,
        reviewCount: 100,
    },
    {
        id: "juice4",
        image: "https://images.pexels.com/photos/2684257/pexels-photo-2684257.jpeg",
        title: "Strawberry Juice",
        price: "200",
        description: " Strawberries are a broadly developed half-breed species of the class Fragaria, collectively known as the strawberries, designed worldwide",
         rating: 4.5,
        reviewCount: 100,
    },
    // all other burgers
];

function Juice() {
    const [juices, setJuices] = useState(juiceData);

    return (
        <>
            <section>
                <br />


                <div className='itemsContainer'>
                    {juices.map((juice, index) => {
                        return (
                            <>
                                <Container items={juice} key={index} />

                            </>
                        )

                    })}
                </div>
                <hr />
            </section>
        </>
    )
}

export default Juice
