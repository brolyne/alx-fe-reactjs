import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipesData from '../data.json';

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe by ID from the data
    const foundRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 text-lg">Recipe not found</p>
          <Link to="/" className="text-blue-500 hover:text-blue-600 mt-4 inline-block">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-4xl mx-auto py-6 px-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">🍳 Recipe Details</h1>
          <Link
            to="/"
            className="text-blue-500 hover:text-blue-600 font-medium"
          >
            ← Back to Recipes
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-12 px-4">
        {/* Recipe Image */}
        <div className="mb-8">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Recipe Title and Basic Info */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{recipe.title}</h1>
          <p className="text-gray-600 text-lg mb-6">{recipe.summary}</p>

          {/* Recipe Meta Info */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-sm text-gray-600">Prep Time</p>
              <p className="text-xl font-semibold text-blue-600">{recipe.prepTime}</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-sm text-gray-600">Cook Time</p>
              <p className="text-xl font-semibold text-green-600">{recipe.cookTime}</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <p className="text-sm text-gray-600">Servings</p>
              <p className="text-xl font-semibold text-purple-600">{recipe.servings}</p>
            </div>
          </div>
        </div>

        {/* Ingredients Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-2xl mr-2">🥘</span> Ingredients
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {recipe.ingredients.map((ingredient, index) => (
              <div
                key={index}
                className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <input
                  type="checkbox"
                  className="mt-1 mr-3 w-5 h-5 text-blue-600 rounded cursor-pointer"
                />
                <span className="text-gray-700">{ingredient}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Instructions Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-2xl mr-2">👨‍🍳</span> Instructions
          </h2>
          <div className="space-y-4">
            {recipe.instructions.map((instruction, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-semibold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-700 text-base">{instruction}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center mb-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            ❤️ Save Recipe
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            📤 Share Recipe
          </button>
          <Link
            to="/add-recipe"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block text-center"
          >
            ➕ Add New Recipe
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto py-8 px-4">
          <p className="text-center text-gray-400">
            © 2026 Recipe Sharing Platform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
