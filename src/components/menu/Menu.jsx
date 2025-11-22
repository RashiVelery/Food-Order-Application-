import React from 'react'
import Burger from './Burger'
import Pizza from './Pizza'
import './menu.css'
import Search from './Search'
import Desserts from './Desserts'
import Juice from './Juice'


function Menu() {
    return (
        <>


            <Search/>
            <Pizza />
            
            <div className='mt-[10px]'>
                <Burger/>
            </div>
            
            <div className='mt-[10px]'>
                <Desserts/>
            </div>
            
            <div className='mt-[10px]'>
                <Juice/>
            </div>

            

        </>
    )
}

export default Menu
