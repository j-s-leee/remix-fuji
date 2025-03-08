import { useParams } from "react-router";

export default function RecipeDetailPage() {
  const { recipeId } = useParams();

  return <div>RecipeDetailPage {recipeId}</div>;
}
