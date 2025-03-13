import {
  BellIcon,
  BookmarkIcon,
  ChevronRight,
  SettingsIcon,
} from "lucide-react";
import { Button } from "~/common/components/ui/button";
import { Link } from "react-router";
import { Avatar, AvatarImage } from "~/common/components/ui/avatar";
export default function MyPage() {
  return (
    <>
      <div className="w-full h-15 z-50 bg-background">
        <div className="flex items-center justify-end p-3 gap-2">
          <Button variant={"ghost"} size={"icon"} asChild>
            <Link to="/my/notifications">
              <BellIcon className="size-6" />
            </Link>
          </Button>
          <Button variant={"ghost"} size={"icon"} asChild>
            <Link to="/my/settings">
              <SettingsIcon className="size-6" />
            </Link>
          </Button>
        </div>
        <div className="flex flex-col px-3">
          <div className="flex items-center gap-2">
            <Avatar className="size-20">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-bold">username</p>
              <Link to="/my/profile" className="text-sm text-muted-foreground">
                프로필 보기 &rarr;
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between p-3">
          <Button variant={"ghost"} asChild className="w-full justify-between">
            <Link to="/my/bookmarks" className="flex gap-2">
              <div className="flex items-center gap-1">
                <BookmarkIcon className="size-6" />
                <span>즐겨찾기</span>
              </div>
              <ChevronRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
