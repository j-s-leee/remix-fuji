export default function RecipeCreatePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">새 레시피 만들기</h1>

      <form className="max-w-2xl">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            레시피 이름
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="레시피 이름을 입력하세요"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            필름 시뮬레이션
          </label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
            <option value="">선택하세요</option>
            <option value="classic-chrome">Classic Chrome</option>
            <option value="pro-neg-hi">PRO Neg. Hi</option>
            <option value="pro-neg-std">PRO Neg. Std</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            설명
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            rows={4}
            placeholder="레시피에 대한 설명을 입력하세요"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
        >
          레시피 생성
        </button>
      </form>
    </div>
  );
}
