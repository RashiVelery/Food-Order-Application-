import React from 'react'

function Search() {
    return (
        <>
            <section>
                <div className='flex '>
                <div className=' searchbarDiv border w-[300px] rounded-[10px] h-[35px] flex items-center mt-[15px]'>
                    <input type="search" placeholder='You can search here...' className='searchBar h-[35px] w-[300px] rounded-[10px] pl-[5px]' />
                </div>
                <div className=' filterBar'>
                    <select name="" id="">
                        <option value="">filter</option>
                    </select>
                </div>
                </div>

                <hr />
            </section>
        </>
    )
}

export default Search
