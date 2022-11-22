function Card({ myprops }) {
    return (

        <div className="card">
            <h2 className="mealName">{myprops.strMeal}</h2>
            <p>Origin :{myprops.strArea}</p>
            <img src={myprops.strMealThumb}></img>
            <p className="recette">{myprops.strInstructions}</p>
        </div>

    );
}

export default Card;
