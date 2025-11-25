import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from './Container';

function Burger() {
    const [burgers, setBurgers] = useState([
        {
            image:"https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg",
            title:"Smash Burger",
            price:"250",
            description:"A burger where a ball of ground meat is smashed onto a hot griddle, resulting in a thin, crispy patty and caramelized edges.",
            button:"Add to Cart",
        },
         {
            image:"https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg",
            title:"Chicken Burger",
            price:"300",
            description:" A burger featuring a patty made from ground chicken, which can be grilled or fried.",
            button:"Add to Cart",
        },
         {
            image:"https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg",
            title:"Veggie Burger",
            price:"400",
            description:" A burger patty made from plant-based ingredients like vegetables, grains, or black beans, appealing to vegetarians and health-conscious individuals.",
            button:"Add to Cart",
        },
         {
            image:"https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg",
            title:"Cheeseburger",
            price:"450",
            description:"A classic burger with a beef patty topped with melted cheese and often includes lettuce, tomato, onion, and pickles.",
            button:"Add to Cart",
        },
    ])
    return (
        <>
            <section>
                <br />
                <h3 className='subHeading'>Burgers</h3>
                <div className='itemsContainer'>

                   {burgers.map((burger,index)=>{
                    return(
                        <Container items = {burger} key = {index}/>
                    )
                   })}
                </div>
                <hr className='line' />
            </section>
        </>
    )
}

export default Burger
