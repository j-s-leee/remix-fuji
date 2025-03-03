import { useParams } from "react-router";

export default function FilmSimulationPage() {
  const { filmSimulation } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{filmSimulation} 레시피</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">시뮬레이션 정보</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 mb-4">
            이 필름 시뮬레이션에 대한 상세 설명이 들어갈 자리입니다.
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-500">42</div>
              <div className="text-sm text-gray-500">레시피</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-500">1.2k</div>
              <div className="text-sm text-gray-500">조회수</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-500">324</div>
              <div className="text-sm text-gray-500">좋아요</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">인기 레시피</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">레시피 제목</h3>
                <p className="text-sm text-gray-600 mb-4">
                  레시피 설명이 들어갈 자리입니다.
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>조회수 123</span>
                  <span>좋아요 45</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
