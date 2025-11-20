import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
      <header>
                <nav className='text-center mt-[15px] ' >
                    <Link to="/">
                        Home
                    </Link>

                    <Link to="/menu">
                        Menu
                    </Link>

                    <Link to = "/cart">
                        Cart
                    </Link>

                    <Link to = "/checkout">
                        Checkout
                    </Link>

                    <Link to="/about">
                        About
                    </Link>

                    <Link to ="/contact">
                        Contact
                    </Link>
                </nav>
            </header>
            <Outlet  />
            <footer>

            </footer>
    </>
  )
}

export default Root
