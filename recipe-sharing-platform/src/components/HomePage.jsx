import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import recipesData from '../data.json';

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load recipes from the data.json file
    setRecipes(recipesData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              🍳 Recipe Sharing Platform
            </h1>
            <p className="text-gray-600 mt-2">
              Discover, share, and enjoy amazing recipes from around the world
            </p>
          </div>
          <Link
            to="/add-recipe"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            ➕ Add Recipe
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Featured Recipes
        </h2>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <Link
              key={recipe.id}
              to={`/recipe/${recipe.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 transform cursor-pointer group"
            >
              {/* Recipe Image */}
              <div className="relative overflow-hidden h-48 bg-gray-200">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>

              {/* Recipe Content */}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {recipe.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {recipe.summary}
                </p>

                {/* Recipe Meta */}
                <div className="flex gap-3 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    ⏱️ {recipe.prepTime}
                  </span>
                  <span className="flex items-center gap-1">
                    🍳 {recipe.cookTime}
                  </span>
                  <span className="flex items-center gap-1">
                    👥 {recipe.servings}
                  </span>
                </div>

                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                  View Recipe
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {recipes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No recipes available yet.</p>
            <Link
              to="/add-recipe"
              className="text-blue-500 hover:text-blue-600 mt-4 inline-block font-medium"
            >
              Be the first to add a recipe!
            </Link>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto py-8 px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-3">🍳 Platform</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>
                  <Link to="/" className="hover:text-white transition">
                    Browse Recipes
                  </Link>
                </li>
                <li>
                  <Link to="/add-recipe" className="hover:text-white transition">
                    Add Recipe
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">📚 Learn</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Cooking Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Tutorials
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">🤝 Community</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Share Feedback
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Report Issue
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">⚙️ Support</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-gray-400">
              © 2026 Recipe Sharing Platform. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
