import { Link } from "react-router";

export default function RecipeListPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">레시피 목록</h1>
        <Link
          to="/recipes/create"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          새 레시피 만들기
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 레시피 카드들이 여기에 들어갈 예정입니다 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-200 rounded"></div>
          <h3 className="text-xl font-semibold mb-2">Classic Chrome</h3>
          <p className="text-gray-600 mb-4">클래식한 필름 룩을 구현한 레시피</p>
          <div className="flex justify-between text-sm text-gray-500">
            <span>조회수 123</span>
            <span>좋아요 45</span>
          </div>
        </div>
      </div>
    </div>
  );
}
