import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pizza from '../menu/Pizza';
import Burger from '../menu/Burger';
import "./home.css"



function Home() {

    const [home, setHome] = useState("menu")

    const navigate = useNavigate();

    const handleOrderNow = () => {
    navigate('/menu');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
  };

    return (
        <>
            <section>
                <div>
                <Carousel className='  pt-[25px]'>

                    <Carousel.Item className='caroselItem'>
                        <img src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg" alt="" />
                        <Carousel.Caption>
                            <h1 className='title1'>Fresh. Fast. Delicious.</h1>
                            <p className='paragraph1'>Your favorite meals delivered hot and fast — anytime, anywhere.</p>

                            <button className={home === "menu" ? "active" : ""} onClick={handleOrderNow} id='button'>Order now</button>


                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className='caroselItem'>
                        <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg" alt="" />
                        <Carousel.Caption>
                            <h1 className='title2'>Stacked With Flavor</h1>
                            <p className='paragraph2'>Enjoy fluffy, golden pancakes topped with fresh fruits and rich caramel. Taste happiness in every bite.</p>

                            <button className={home === "menu" ? "active" : ""} onClick={() => navigate("/menu")} id='button' >
                                Order now
                            </button>

                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className='caroselItem'>
                        <img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg" alt="" />
                        <Carousel.Caption>
                            <h1 className='title3'>Made With Fresh Ingredients</h1>
                            <p className='paragraph3'>
                                We prepare every dish with handpicked ingredients to serve you pure quality.
                            </p>

                            <button className={home === "menu" ? "active" : ""}  onClick={() => navigate("/menu")} id='button' >
                                Order now
                            </button>

                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
                </div>
            </section>

            <div className='about'>
                <div>
                    <p><b>QuickerEats </b>is a modern and user-friendly food ordering platform designed to make browsing, selecting, and ordering food simple and enjoyable. The website focuses on speed, clarity, and a smooth user experience. Built with React, it provides an intuitive interface where users can explore a variety of dishes, filter menu items, add food to their cart, and complete an order in a few simple steps.</p>
                </div>
                <div>
                    <p>Our platform highlights fresh ingredients, quality meals, and a clean design that guides users effortlessly throughout the website. Whether someone wants a quick snack, a refreshing drink, or a full meal, QuickerEats ensures everything is easy to find through a well-organized menu and categories.</p>
                </div>
                <div><p>
                    The website is fully responsive, ensuring a smooth and beautiful experience across mobile, tablet, and desktop devices. It also includes a dark mode option for better visual comfort. Static pages like About Us and Contact Us help users learn more about the brand and reach out if needed, providing a complete and polished web experience.</p>
                </div>
                <a href="#app">App link</a>
            </div>
        </>
    )
}

export default Home
