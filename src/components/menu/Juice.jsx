import React, { useState } from 'react'
import Container from './Container';



function Juice() {
    const [juices, setJuices] = useState([
        {
            image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg",
            title: "Pista Badam Milk",
            price: "200",
            description: " A rich and nutty option, this variation incorporates ground pistachios along with almonds, sometimes with added flavorings like cardamom or saffron for an extra layer of taste.",
            button: "Add To Cart",
        },
        {
            image: "https://images.pexels.com/photos/96620/pexels-photo-96620.jpeg",
            title: "Orange juice",
            price: "125",
            description: " Orange juice is arguably the most popular juice worldwide, known for its vibrant colour and refreshing taste. Rich in vitamin C, it boosts the immune system",
            button: "Add To Cart",
        },
        {
            image: "https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg",
            title: "Lime Juice",
            price: "350",
            description: " The main ingredient for lime juice is fresh limes. Depending on the desired recipe, you can also add water, a sweetener (like sugar or honey), and other optional ingredients such as salt, mint leaves, or black salt to taste.",
            button: "Add To Cart",
        },
        {
            image: "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg",
            title: "Strawberry Juice",
            price: "200",
            description: " Strawberries are a broadly developed half-breed species of the class Fragaria, collectively known as the strawberries, designed worldwide",
            button: "Add To Cart",
        },
    ]);

    return (
        <>
            <section>
                <br />

                <h3 className='subHeading'>Juices</h3>
                <div className='itemsContainer'>
                    {juices.map((juice, index) => {
                        return (
                           <Container items = {juice}/>
                        )

                    })}
                </div>
                <hr />
            </section>
        </>
    )
}

export default Juice
