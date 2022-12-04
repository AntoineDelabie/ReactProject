import Card from './Card';
import axios from 'axios';
import React, { useState } from 'react';
import Menu from "./Menu";

function Recettes() {
    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState('');

    const baseURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

    React.useEffect(() => {
        const url = baseURL + search;


        axios.get(url).then((response) => {
            setMeals(response.data.meals);
        });
    }, [search]);

    return (
        <div>
            {/* <Menu /> */}
            <h1>Recettes de cuisine</h1>
            <div className='searchBar'>
                <input
                    type="text"
                    name='searchBar'
                    id='searchBar'
                    placeholder='Rechercher'
                    value={search}
                    onChange={(event) => setSearch(event.target.value)} />
            </div>

            <div className='mainComponent'>
                {meals.map(meal =>
                    <div key={meal.idMeal}>
                        <Card myprops={meal} />
                    </div>
                )}
            </div>
        </div>

    );
}

export default Recettes;