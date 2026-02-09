import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AddRecipeForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    ingredients: '',
    prepTime: '',
    cookTime: '',
    servings: '',
    instructions: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required';
    }

    if (!formData.summary.trim()) {
      newErrors.summary = 'Recipe summary is required';
    }

    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Please enter at least one ingredient';
    }

    const ingredientsList = formData.ingredients.split('\n').filter((item) => item.trim());
    if (ingredientsList.length < 2) {
      newErrors.ingredients = 'Please enter at least 2 ingredients';
    }

    if (!formData.instructions.trim()) {
      newErrors.instructions = 'Please enter cooking instructions';
    }

    if (!formData.prepTime.trim()) {
      newErrors.prepTime = 'Prep time is required';
    }

    if (!formData.cookTime.trim()) {
      newErrors.cookTime = 'Cook time is required';
    }

    if (!formData.servings.trim()) {
      newErrors.servings = 'Number of servings is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitted(true);
      // Simulate successful submission
      setTimeout(() => {
        navigate('/');
      }, 1500);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-xl p-8 text-center max-w-md">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Recipe Added Successfully!</h2>
          <p className="text-gray-600 mb-6">Your new recipe has been added to the platform.</p>
          <p className="text-sm text-gray-500">Redirecting to home page...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-2xl mx-auto py-6 px-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">➕ Add New Recipe</h1>
          <Link to="/" className="text-blue-500 hover:text-blue-600 font-medium">
            ← Back to Recipes
          </Link>
        </div>
      </header>

      {/* Form Section */}
      <main className="max-w-2xl mx-auto py-12 px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Recipe Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                Recipe Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="e.g., Chocolate Chip Cookies"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                  errors.title ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
              />
              {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title}</p>}
            </div>

            {/* Recipe Summary */}
            <div>
              <label htmlFor="summary" className="block text-sm font-semibold text-gray-700 mb-2">
                Recipe Summary *
              </label>
              <textarea
                id="summary"
                name="summary"
                value={formData.summary}
                onChange={handleInputChange}
                placeholder="Brief description of your recipe"
                rows="3"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none ${
                  errors.summary ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
              />
              {errors.summary && <p className="text-red-600 text-sm mt-1">{errors.summary}</p>}
            </div>

            {/* Timing and Servings - Grid */}
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="prepTime" className="block text-sm font-semibold text-gray-700 mb-2">
                  Prep Time *
                </label>
                <input
                  type="text"
                  id="prepTime"
                  name="prepTime"
                  value={formData.prepTime}
                  onChange={handleInputChange}
                  placeholder="e.g., 15 mins"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                    errors.prepTime ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                />
                {errors.prepTime && <p className="text-red-600 text-sm mt-1">{errors.prepTime}</p>}
              </div>

              <div>
                <label htmlFor="cookTime" className="block text-sm font-semibold text-gray-700 mb-2">
                  Cook Time *
                </label>
                <input
                  type="text"
                  id="cookTime"
                  name="cookTime"
                  value={formData.cookTime}
                  onChange={handleInputChange}
                  placeholder="e.g., 30 mins"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                    errors.cookTime ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                />
                {errors.cookTime && <p className="text-red-600 text-sm mt-1">{errors.cookTime}</p>}
              </div>

              <div>
                <label htmlFor="servings" className="block text-sm font-semibold text-gray-700 mb-2">
                  Servings *
                </label>
                <input
                  type="text"
                  id="servings"
                  name="servings"
                  value={formData.servings}
                  onChange={handleInputChange}
                  placeholder="e.g., 4"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                    errors.servings ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                />
                {errors.servings && <p className="text-red-600 text-sm mt-1">{errors.servings}</p>}
              </div>
            </div>

            {/* Ingredients */}
            <div>
              <label htmlFor="ingredients" className="block text-sm font-semibold text-gray-700 mb-2">
                Ingredients (one per line, minimum 2) *
              </label>
              <textarea
                id="ingredients"
                name="ingredients"
                value={formData.ingredients}
                onChange={handleInputChange}
                placeholder={`2 cups flour\n1 cup sugar\n3 eggs\n1 tsp vanilla extract`}
                rows="6"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none font-mono text-sm ${
                  errors.ingredients ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
              />
              {errors.ingredients && <p className="text-red-600 text-sm mt-1">{errors.ingredients}</p>}
              <p className="text-gray-500 text-xs mt-1">Enter each ingredient on a new line</p>
            </div>

            {/* Instructions */}
            <div>
              <label htmlFor="instructions" className="block text-sm font-semibold text-gray-700 mb-2">
                Cooking Instructions (one per line) *
              </label>
              <textarea
                id="instructions"
                name="instructions"
                value={formData.instructions}
                onChange={handleInputChange}
                placeholder={`Preheat oven to 350°F\nMix dry ingredients\nAdd wet ingredients\nBake for 20 minutes`}
                rows="8"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none font-mono text-sm ${
                  errors.instructions ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
              />
              {errors.instructions && <p className="text-red-600 text-sm mt-1">{errors.instructions}</p>}
              <p className="text-gray-500 text-xs mt-1">Enter each instruction on a new line</p>
            </div>

            {/* Form Actions */}
            <div className="flex gap-4 justify-center pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                ✨ Add Recipe
              </button>
            </div>
          </form>
        </div>

        {/* Help Section */}
        <div className="bg-blue-50 rounded-lg p-6 mt-8 border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">💡 Tips for Adding a Great Recipe</h3>
          <ul className="text-blue-800 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span>Be specific with ingredient quantities and measurements</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span>Write clear, step-by-step instructions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span>Include cooking times for better planning</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span>Always list the number of servings</span>
            </li>
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-2xl mx-auto py-8 px-4">
          <p className="text-center text-gray-400">
            © 2026 Recipe Sharing Platform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
