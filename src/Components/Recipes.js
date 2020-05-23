import React from 'react';

const Recipes = props => (
    <div className="container">
        <div className="row">
            { props.recipes.map((recipe) => {
                console.log(recipe)
                return (
                    <div key={recipe.recipe.uri} className="col-md-4" style={{marginBottom:"2rem"}}>
                        <div className="recipes__box">
                            <img 
                                className="recipe__box-img"
                                src={recipe.recipe.image} 
                                alt={recipe.recipe.label}
                            />
                            <div className="recipe__text">
                                <h5 className="recipes__title">
                                    { recipe.recipe.label.length < 20 ? `${recipe.recipe.label}` : `${recipe.recipe.label.substring(0, 25)}...`}
                                </h5>
                                <p className="recipes__subtitle">Publisher: 
                                    <span> {recipe.recipe.source}</span>
                                </p>
                            </div>
                            <button className="recipe_buttons">View Recipe</button>
                        </div>
                    </div>
                );
            }) }
        </div>
    </div>
);

export default Recipes;