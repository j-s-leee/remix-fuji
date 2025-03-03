export default function CommunityTopPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">인기 게시물</h1>

      <div className="mb-8">
        <div className="flex space-x-4">
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md">
            오늘
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md">
            이번 주
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md">
            이번 달
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md">
            전체
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div className="ml-4">
                  <div className="font-semibold">사용자 이름</div>
                  <div className="text-sm text-gray-500">2시간 전</div>
                </div>
              </div>
              <div className="text-2xl font-bold text-blue-500">#{index}</div>
            </div>

            <h2 className="text-xl font-semibold mb-4">인기 게시물 제목</h2>
            <p className="text-gray-600 mb-4">
              인기 게시물 내용이 들어갈 자리입니다. 여기에는 사용자가 작성한
              내용이 표시됩니다.
            </p>

            <div className="aspect-w-16 aspect-h-9 bg-gray-200 mb-4 rounded"></div>

            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-4">조회수 1.2k</span>
              <span className="mr-4">댓글 89</span>
              <span>좋아요 234</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
