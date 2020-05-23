/*simple recipe app created following tutorial by Hamza Mirza
https://www.youtube.com/watch?v=PbJt7-a2274*/

import React, { Component } from 'react';
import './App.css';

import apiConfig from './apiKeys';
import Form from "./Components/Form";
import Recipes from "./Components/Recipes"

class App extends Component {
  state = {
    recipes: []
  }
  //makes api call
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://api.edamam.com/search?q=${recipeName}&app_id=${apiConfig.APP_ID}&app_key=${apiConfig.APP_KEY}&from=0&to=10`);
    
    const data = await api_call.json();
    this.setState({
      recipes: data.hits
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;