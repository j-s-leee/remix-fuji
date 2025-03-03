import { Link } from "react-router";

const filmSimulations = [
  {
    id: "classic-chrome",
    name: "Classic Chrome",
    description: "클래식한 필름 룩을 구현한 시뮬레이션",
    recipeCount: 42,
  },
  {
    id: "pro-neg-hi",
    name: "PRO Neg. Hi",
    description: "선명한 컬러와 대비를 제공하는 시뮬레이션",
    recipeCount: 35,
  },
  {
    id: "pro-neg-std",
    name: "PRO Neg. Std",
    description: "자연스러운 피부톤을 위한 시뮬레이션",
    recipeCount: 28,
  },
];

export default function FilmSimulationsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">필름 시뮬레이션</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filmSimulations.map((simulation) => (
          <Link
            key={simulation.id}
            to={`/recipes/film-simulations/${simulation.id}`}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{simulation.name}</h2>
            <p className="text-gray-600 mb-4">{simulation.description}</p>
            <div className="text-sm text-gray-500">
              {simulation.recipeCount}개의 레시피
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
