import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import './root.css';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../Login/Login';





function Root() {


    const navigate = useNavigate();
    const location = useLocation();

    const activePath = location.pathname


    const cart = useSelector(state => state.cart.value)

    const [menuOpen, setMenuOpen] = useState(false);

    const [darkmode, setDarkmode] = useState(false);

    const handleDarkmode = () => {
        setDarkmode(!darkmode)
    }

   

    useEffect(() => {

        const root = document.documentElement;

        if (darkmode) {

            root.style.setProperty('--textcolor', 'white')
            root.style.setProperty('--bgcolor', 'black')
            root.style.setProperty('--header', 'rgba(207, 205, 205, 1)')
            root.style.setProperty('--search', 'white')
            root.style.setProperty("--button", 'rgba(173, 171, 171, 1)')

        }
        else {

            root.style.setProperty('--textcolor', 'black')
            root.style.setProperty('--bgcolor', 'white')
            root.style.setProperty('--header', 'hsla(40, 78%, 91%, 1.00)')
            root.style.setProperty('--search', 'black')
            root.style.setProperty("--button", 'rgba(248, 228, 187, 1)')

        }

    }, [darkmode])

    const [showLogin, setShowLogin] = useState(false)


    return (
        <  >
            <div className='page-wrapper'>
                {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
                <header>
                    <nav className='navbar'>
                        <div className='navLogo'>
                            <span >Quicker<span className='text-[red]'>Eats.</span></span>
                        </div>

                        <button
                            className="nav-toggle"
                            onClick={() => setMenuOpen(prev => !prev)}
                            aria-label="Toggle navigation"
                        >
                            ☰
                        </button>

                        <div className={`nav-right ${menuOpen ? "open" : ""}`}>

                            <ul className='navItems'>
                                <li
                                    className={activePath === "/" ? "active" : ""}
                                    onClick={() => { navigate("/"); setMenuOpen(false); }}
                                >
                                    Home
                                </li>
                                <li
                                    className={activePath === "/menu" ? "active" : ""}
                                    onClick={() => { navigate("/menu"); setMenuOpen(false); }}
                                >
                                    Menu
                                </li>

                                <li
                                    className={activePath === "/cart" ? "active" : ""}
                                    onClick={() => { navigate("/cart"); setMenuOpen(false); }}
                                >
                                    Cart
                                </li>

                                <li
                                    className={activePath === "/checkout" ? "active" : ""}
                                    onClick={() => { navigate("/checkout"); setMenuOpen(false); }}
                                >
                                    Checkout
                                </li>
                                <li
                                    className={activePath === "/about" ? "active" : ""}
                                    onClick={() => { navigate("/about"); setMenuOpen(false); }}
                                >
                                    About
                                </li>
                            </ul>


                            <div className='navIcons'>
                                <div className=' cartCount ' >{cart.length}</div>

                                <div className='store'>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className={`bi bi-cart-fill ${activePath === "/cart" ? "active" : ""}`}
                                        onClick={() => navigate("/cart")}>

                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                    </svg>

                                </div>
                                <div className='darkmode' onClick={handleDarkmode}>
                                    {darkmode ? <i><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-sun-fill" viewBox="0 0 16 16" >

                                        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                                    </svg></i> : <i><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16" >
                                        <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                                    </svg></i>}

                                </div>
                                <div className='signUp' onClick={() => setShowLogin(true)}>
                                    Sign up
                                </div>

                            </div>
                        </div>


                    </nav>
                </header>
                <Outlet />
                <footer>
                    <div className='footerDetails'>
                        <div>
                            <div className='logoIcon'>
                                <span className=' text-[black] text-[20px] font-[500]'>Quicker<span className='text-[red]'>Eats.</span></span>
                            </div>
                            <div className='email'>
                                <div className='emailIcon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                        <path fillRule='evenodd' d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                                    </svg>
                                </div>
                                <p>quickereats@gmail.com</p>
                            </div>
                            <div className='phone'>
                                <div className='phoneIcon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                        <path fillRule='evenodd' d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                    </svg>
                                </div>
                                <p>+94 9678568900</p>
                            </div>

                        </div>
                        <div>
                            <div>
                                <p className='text-[#000000] text-[20px] font-[500]'>Helpful Links</p>
                            </div>
                            <div>
                                <p>Contact</p>
                            </div>
                            <div>
                                <p>FAQs</p>
                            </div>

                        </div>
                        <div>
                            <div>
                                <p className='text-[#000000] text-[20px] font-[500]'>Information</p>
                            </div>
                            <div>
                                <p>About us</p>
                            </div>
                            <div>
                                <p>Testimonial</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p className='text-[#000000] text-[20px] font-[500]'>Social</p>
                            </div>
                            <div className='facebook'>
                                <div className='facebookIcon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                        <path fillRule='evenodd' d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                    </svg>
                                </div>
                                <p>Facebook</p>
                            </div>
                            <div className='instagram'>
                                <div className='instagramIcon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                        <path fillRule='evenodd' d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                    </svg>
                                </div>
                                <p>Instagram</p>
                            </div>

                        </div>

                    </div>
                    <div>
                        <p className='text-center text-[#black] text-[12px] p-[10px]'>
                            &copy; Copyright 2025 . All right reserved.
                            <span onClick={() => navigate("/admin")} className='underline' >Go to Admin panal</span>
                        </p>
                    </div>

                </footer>
            </div>
        </>
    )
}

export default Root
