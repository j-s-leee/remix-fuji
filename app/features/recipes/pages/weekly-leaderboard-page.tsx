import { useParams } from "react-router";

export default function WeeklyLeaderboardPage() {
  const { year, month, week } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        {year}년 {month}월 {week}주차 인기 레시피
      </h1>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                순위
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                레시피
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                작성자
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                조회수
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                좋아요
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {[1, 2, 3].map((rank) => (
              <tr key={rank} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {rank}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Classic Chrome Recipe
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  사용자
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  1,234
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  567
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
