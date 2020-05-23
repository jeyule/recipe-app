import React from 'react';
import {Link} from "react-router-dom";

import apiConfig from '../apiKeys';

class Recipe extends React.Component {
    state = {
        activeRecipe: []
    }

    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        //console.log(title);
        const req = await fetch(`https://api.edamam.com/search?q=${title}&app_id=${apiConfig.APP_ID}&app_key=${apiConfig.APP_KEY}`);
        const res = await req.json();
        this.setState({activeRecipe: res.hits[0]});
    }

    render() {
        const recipe = this.state.activeRecipe;
        //console.log(this.state.activeRecipe);
        return (
            <div className="container">
                {this.state.activeRecipe.length !== 0 && 
                    <div className="active-recipe">
                            <img className="active-recipe__img" src={recipe.recipe.image} alt={recipe.recipe.label}/>
                            <h3 className="active-recipe__title">{recipe.recipe.label}</h3>
                            <h4 className="active-recipe__publisher">Publisher: <span>{recipe.recipe.source}</span></h4>
                            <p className="active-recipe__website">Website: <span><a href={recipe.recipe.url}>{recipe.recipe.url}</a></span></p>
                            <button className="active-recipe__button">
                                <Link to="/">Go Home</Link>
                            </button>
                    </div>
                }   
            </div>
        );
    }
};

export default Recipe;