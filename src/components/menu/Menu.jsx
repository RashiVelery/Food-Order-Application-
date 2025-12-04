import React, { useState } from 'react';
import { pizzaData } from './Pizza';
import { burgerData } from './Burger';
import { juiceData } from './Juice';
import { dessertsData } from './Desserts';
import Container from './Container';
import "./menu.css";






function Menu() {


    const [searchTerm, setSearchTerm] = useState('');
    const [sortType, setSortType] = useState('');

    const products = [
        ...pizzaData,
        ...burgerData,
        ...juiceData,
        ...dessertsData,
    ];

    let filtered = products.filter(item =>
        (item.title || '').toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log('sortType:', sortType, filtered.map(i => `${i.title} ${i.price}`));

    // 2) sort filter
    if (sortType === 'amount') {
        filtered = [...filtered].sort((a, b) => {
            const priceA = Number(a.price);
            const priceB = Number(b.price);
            return priceA - priceB;
        });
    } else if (sortType === 'alphabet') {
        filtered = [...filtered].sort((a, b) =>
            (a.title || '').toLowerCase().localeCompare((b.title || '').toLowerCase())
        );
    }

    const showSearchResults = searchTerm.trim().length > 0;


    return (
        <section>
            <div className="flex searchbarDiv items-center mt-[15px]">
                <input
                    type="search"
                    placeholder="You can search here..."
                    className="searchBar h-[35px] w-[300px] rounded-[10px] pl-[5px]"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />

                <select
                    id="filterBar"
                    value={sortType}
                    onChange={e => setSortType(e.target.value)} className='filterBar'
                >
                    <option value="">filter</option>
                    <option value="amount">Price (Low to High)</option>
                    <option value="alphabet">Alphabet</option>
                </select>
            </div>

            <hr className="line" />

            <h1 className="Heading">Catogories</h1>

            <div className="itemsContainer">
                {filtered.map(item => (
                    <Container items={item} key={item.id} />
                ))}
            </div>
        </section>
    );
}

export default Menu;
