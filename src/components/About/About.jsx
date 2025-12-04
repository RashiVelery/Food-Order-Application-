import React from 'react'
import "./About.css"

function About() {
    return (
        <>
            <section className="about">
                {/* Hero row */}
                <div className="about-hero">
                    <div className="about-hero-text">
                        <h1>About   Quicker<span className='text-[red]'>Eats.</span></h1>
                        <p>
                            QuickerEats is a modern food‑ordering platform that brings your favorite pizzas,
                            burgers, desserts, and juices to your door in just a few clicks.
                        </p>
                    </div>
                    <div className="about-hero-text right">
                        <h2>Our Story</h2>
                        <p>QuickerEats started as a small project to make ordering good food fast and hassle‑free...</p>
                    </div>
                </div>

                {/* Image row */}
                <div className="about-images">
                    <img src="https://images.pexels.com/photos/34989249/pexels-photo-34989249.jpeg" alt="Table with dishes" />
                    <img src="https://images.pexels.com/photos/3139343/pexels-photo-3139343.jpeg" alt="Burgers and drinks" />
                </div>

                {/* Beliefs row */}
                <div className="about-beliefs">
                    <h2>What We Believe</h2>
                    <p><strong>Quality first:</strong> We highlight dishes made with fresh ingredients and clear pricing.</p>
                    <p><strong>Speed and simplicity:</strong> Search, filter, and order in seconds from any device.</p>
                    <p><strong>Transparency:</strong> Every item shows price, description, rating, and reviews.</p>
                </div>
            </section>

        </>
    )
}

export default About
