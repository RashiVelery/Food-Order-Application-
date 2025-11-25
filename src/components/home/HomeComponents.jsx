import React from 'react'

function HomeComponents(props) {
    return (
        <>
            <div className='imageCircle'>
                <img src={props.image.images} alt="" />
            </div>
        </>
    )
}

export default HomeComponents
