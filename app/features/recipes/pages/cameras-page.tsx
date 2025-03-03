import { Link } from "react-router";

const cameras = [
  {
    id: "x-t4",
    name: "FUJIFILM X-T4",
    description: "전문가용 미러리스 카메라",
    recipeCount: 156,
  },
  {
    id: "x-t3",
    name: "FUJIFILM X-T3",
    description: "고성능 미러리스 카메라",
    recipeCount: 142,
  },
  {
    id: "x-pro3",
    name: "FUJIFILM X-Pro3",
    description: "레인지파인더 스타일 카메라",
    recipeCount: 98,
  },
];

export default function CamerasPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">카메라 모델</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cameras.map((camera) => (
          <Link
            key={camera.id}
            to={`/recipes/cameras/${camera.id}`}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{camera.name}</h2>
            <p className="text-gray-600 mb-4">{camera.description}</p>
            <div className="text-sm text-gray-500">
              {camera.recipeCount}개의 레시피
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
