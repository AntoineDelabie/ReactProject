import axios from 'axios';
import React, { useState } from 'react';
import Card from './Components/Card';


const baseURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export default function App() {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");


  React.useEffect(() => {
    const url = baseURL + search;
    console.log(url);


    axios.get(url).then((response) => {
      setMeals(response.data.meals);
    });
  }, [search]);


  if (!meals) {

    return (
      <header>
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
      </header>
    );
  }

  return (
    <div>

      <header>
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
      </header>

      <div className='mainComponent'>
        {meals.map(meal =>
          <div key={meal.idMeal}>
            <Card myprops={meal} />
          </div>
        )}
      </div>
    </div >
  );
}






