import { useRecipeStore } from './recipeStore';
import { useState } from 'react';
//src/components/recipeStore.js doesn't contain: ["updateRecipe", "deleteRecipe"]

  const RecipeList = () => {

    const [updateRecipe, deleteRecipe] = useRecipeStore(state => [state.updateRecipe, state.deleteRecipe]);

    const recipes = useRecipeStore(state => state.recipes);

    return (
      <div>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    );
  };
export default RecipeList;
