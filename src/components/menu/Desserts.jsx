import React, { useState } from 'react'
import Container from './Container';

export const dessertsData = [
    {
        id: "desserts1",
        image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg",
        title: "Strawberry pie",
        price: "450",
        description: "The main ingredients are fresh strawberries, a pie crust, and a sweetener (often sugar or high fructose corn syrup). Thickeners like cornstarch or gelatin are commonly used to manage moisture.",
         rating: 4.3,
        reviewCount: 90,
    },

    {
        id: "desserts2",
        image: "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg",
        title: "Tiramisu",
        price: "300",
        description: " Tiramisu is an Italian dessert made of ladyfinger pastries dipped in coffee, layered with a whipped mixture of egg yolks, sugar, and mascarpone, and topped with cocoa powder.",
         rating: 4.6,
        reviewCount: 95,
    },
    {
        id: "desserts3",
        image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
        title: "Apple Pie",
        price: "350",
        description: "apple pie is a pie in which the principal filling is apples. It is often served with whipped cream, ice cream, custard or cheddar cheese. It is generally double-crusted, with pastry both above and below the filling; the upper crust may be solid or latticed.",
         rating: 4.9,
        reviewCount: 80,
    },
    {
        id: "desserts4",
        image: "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg",
        title: "Chocolate Brownie",
        price: "350",
        description: " chocolate brownie, or simply a brownie, is a chocolate baked dessert bar. Brownies come in a variety of forms and may be either fudgy or cakey, depending on their density.",
         rating: 4.1,
        reviewCount: 70,
    },
    // all other desserts
];



function Desserts() {

    const [desserts, setDesserts] = useState(dessertsData);


    return (
        <>
            <section>
                <br />

                <div className='itemsContainer'>
                    {desserts.map((dessert, index) => {
                        return (
                            <>
                                <Container items={dessert} key={index} />
                            </>
                        )
                    })}
                </div>
                < hr className='line' />
            </section>
        </>
    )
}

export default Desserts
