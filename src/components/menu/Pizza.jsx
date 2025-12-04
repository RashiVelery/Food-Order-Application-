import React, { useState } from 'react'
import Container from './Container';




export const pizzaData = [
    {
        id:"pizza1",
        image: "https://media.istockphoto.com/id/1096509572/photo/pizza-with-mozzarella-cheese-ham-pepper-meat-tomato-sauce-spices-and-fresh-basil-italian.jpg?s=612x612&w=0&k=20&c=2fnstyzV6CMgZgk7mKD8iV362R59hzNHArV3HV6pn7E=",
        title: "Detroit-style pizza",
        price: "900",
        description: " Detroit-style pizza is a rectangular pan pizza with a thick, crisp, chewy crust. It is traditionally topped to the edges with mozzarella or Wisconsin brick cheese, which caramelizes against the high-sided heavyweight rectangular pan.",
         rating: 4.8,
        reviewCount: 80,
    },
    {
        id:"pizza2",
        image: "https://media.istockphoto.com/id/1403266281/photo/heart-bacon-valentine-pizza-with-melting-cheese-tomatoes-ham-for-valentines-day-with.jpg?s=612x612&w=0&k=20&c=iKIfjt6pHMK08PRFBoBA677fvUVctbVExJyjUV0FPhw=",
        title: "California pizza",
        price: "750",
        description: " California-style pizza is a style of pizza that combines New York and Italian thin crust with toppings from the California cuisine cooking style. Its invention is generally attributed to chef Ed LaDou, and Chez Panisse, in Berkeley, California.",
         rating: 4.3,
        reviewCount: 100,
    },
    {
        id:"pizza3",
        image: "https://media.istockphoto.com/id/1204014912/photo/delicious-homemade-pizza-with-sweet-pepper.jpg?s=612x612&w=0&k=20&c=aSTzSaC-RzV_Yuz37UzEXPxmnGcNBJGuA0qT9POFBtA=",
        title: "Neapolitan pizza",
        price: "800",
        description: "  Neapolitan pizza is the classic Italian-style pizza that originated in Naples. It features a thin, soft, and chewy crust.",
         rating: 4.2,
        reviewCount: 75,
    },
    {
        id:"pizza4",
        image: "https://media.istockphoto.com/id/1210561171/photo/appetizing-pizza-with-spicy-chorizo-salami-on-wooden-background-in-a-restaurant-italian.jpg?s=612x612&w=0&k=20&c=8fJmjQvy8mKneoQ3A9B25uK3EBZ9xjt2sbeWfw26hh8=",
        title: "Sicilian pizza",
        price: "1000",
        description: "  Another typical Sicilian pizza is the Scacciata, from the Catania side, a stuffed pizza- pizza dough base, toppings and another pizza on top!",
         rating: 4.5,
        reviewCount: 85,
    },
    {
        id:"pizza5",
        image: "https://media.istockphoto.com/id/694091842/photo/bacon-chicken-pizza.jpg?s=612x612&w=0&k=20&c=D3GytqiTy8FU6NHV9Ku4WNNBeUBh6LgFv8dlrTWx2D0=",
        title: "New york style pizza",
        price: "800",
        description: "   New York–style pizza is a pizza made with a characteristically large hand-tossed thin crust, often sold in wide slices to go. The crust is thick and crisp only along its edge, yet soft, thin, and pliable enough beneath its toppings to be folded to eat.",
         rating: 4.4,
        reviewCount: 100
    },
    {
        id:"pizza6",
        image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg",
        title: "Hawaiian pizza",
        price: "820",
        description: "  Hawaiian pizza is a pizza invented in Canada, topped with pineapple, tomato sauce, mozzarella cheese, and either ham or bacon.Hawaiian Pizza. A controversial yet beloved option, Hawaiian Pizza features the bold combination of ham and pineapple. .",
         rating: 4.5,
        reviewCount: 120,
    },
    {
        id:"pizza7",
        image: "https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg",
        title: "Roman pizza",
        price: "1000",
        description: " Roman pizza is a style of pizza originating in Rome, but now widespread, especially in central Italy.",
         rating: 4.5,
        reviewCount: 80,
    },
    {
        id:"pizza8",
        image: "https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg",
        title: "Grandma pizza",
        price: "1200",
        description: " Grandma pizza is a distinct thin, rectangular style of pizza attributed to Long Island, New York. Typically topped with cheese and tomato sauce, it is reminiscent of pizzas baked at home by Italian housewives who lacked a pizza oven. ",
         rating: 4.6,
        reviewCount: 110,
    },
    // all other pizzas
];

function Pizza() {

    const [pizzas, setPizzas] = useState(pizzaData)


    return (
        <>
            <section>
                <h1 className='Heading'>Catogories</h1>
                
                <div className='itemscontainer' >

                    {pizzas.map((pizza, index) => {
                        return (
                            <>
                                <Container items={pizza} key={index} />

                            </>
                        )
                    })}
                </div>
                <hr className='line' />
            </section>

        </>
    )
}

export default Pizza
