import { Link } from "react-router";

export default function CommunityListPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">커뮤니티</h1>
        <div className="space-x-4">
          <Link
            to="/community/top"
            className="text-blue-500 hover:text-blue-600"
          >
            인기 게시물
          </Link>
          <Link
            to="/community/create"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            글쓰기
          </Link>
        </div>
      </div>

      <div className="space-y-6">
        {[1, 2, 3].map((index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div className="ml-4">
                <div className="font-semibold">사용자 이름</div>
                <div className="text-sm text-gray-500">2시간 전</div>
              </div>
            </div>

            <h2 className="text-xl font-semibold mb-4">게시물 제목</h2>
            <p className="text-gray-600 mb-4">
              게시물 내용이 들어갈 자리입니다. 여기에는 사용자가 작성한 내용이
              표시됩니다.
            </p>

            <div className="aspect-w-16 aspect-h-9 bg-gray-200 mb-4 rounded"></div>

            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-4">조회수 123</span>
              <span className="mr-4">댓글 12</span>
              <span>좋아요 45</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
