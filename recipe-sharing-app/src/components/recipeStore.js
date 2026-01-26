import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],

  addRecipe: (newRecipe) =>
    set(state => ({ recipes: [...state.recipes, newRecipe] })),

  setRecipes: (recipes) =>
    set({ recipes, filteredRecipes: recipes }),

  deleteRecipe: (id) =>
    set(state => ({
      recipes: state.recipes.filter(recipe => recipe.id !== id),
      filteredRecipes: state.filteredRecipes.filter(recipe => recipe.id !== id)
    })),

  updateRecipe: (updatedRecipe) =>
    set(state => ({
      recipes: state.recipes.map(recipe =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
      filteredRecipes: state.filteredRecipes.map(recipe =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    })),

  searchTerm: '',
  filteredRecipes: [],

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  filterRecipes: () => {
    const { recipes, searchTerm } = get();

    set({
      filteredRecipes: recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    });
  },
}));

export default useRecipeStore;
