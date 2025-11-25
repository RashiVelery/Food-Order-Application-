import React from 'react'
import Details from './Details'
import { useDispatch, useSelector } from 'react-redux'
function Cart() {

    const cart = useSelector(state => state.cart.value)
    


    return (
        <>
            <section>

                <div className='mt-[15px]'>
                    <h1 className='Heading'>Your Cart</h1>
                    <hr className='line' />
                    <div>
                      
                    </div>
                </div>
                <Details />

            </section>
        </>
    )
}

export default Cart
