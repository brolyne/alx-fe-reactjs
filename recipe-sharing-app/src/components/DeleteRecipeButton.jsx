//Component: A simple button that, when clicked, deletes a specific recipe.
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
  };

  return (
    <button onClick={handleDelete}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;