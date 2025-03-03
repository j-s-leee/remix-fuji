import { Link } from "react-router";

export default function LeaderboardPage() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">레시피 리더보드</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link
          to={`/recipes/leaderboards/yearly/${currentYear}`}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">연간 랭킹</h2>
          <p className="text-gray-600">{currentYear}년 인기 레시피</p>
        </Link>

        <Link
          to={`/recipes/leaderboards/monthly/${currentYear}/${currentMonth}`}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">월간 랭킹</h2>
          <p className="text-gray-600">
            {currentYear}년 {currentMonth}월 인기 레시피
          </p>
        </Link>

        <Link
          to={`/recipes/leaderboards/weekly/${currentYear}/${currentMonth}/1`}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">주간 랭킹</h2>
          <p className="text-gray-600">이번 주 인기 레시피</p>
        </Link>

        <Link
          to={`/recipes/leaderboards/daily/${currentYear}/${currentMonth}/${new Date().getDate()}`}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">일간 랭킹</h2>
          <p className="text-gray-600">오늘의 인기 레시피</p>
        </Link>
      </div>
    </div>
  );
}
