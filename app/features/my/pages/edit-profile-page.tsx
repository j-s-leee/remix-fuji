import {
  ArrowLeftIcon,
  BookmarkIcon,
  CameraIcon,
  ChevronRight,
  PencilIcon,
  ScrollTextIcon,
  SettingsIcon,
} from "lucide-react";
import { Button } from "~/common/components/ui/button";
import { Link } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Textarea } from "~/common/components/ui/textarea";
import { Input } from "~/common/components/ui/input";

export default function EditProfilePage() {
  return (
    <>
      <div className="w-full h-15 z-50 bg-background p-4 space-y-4">
        <div className="flex items-center justify-between gap-2">
          <Button variant={"ghost"} size={"icon"} asChild>
            <Link to="/my">
              <ArrowLeftIcon className="size-6" />
            </Link>
          </Button>
        </div>
        <div className="flex flex-col px-3">
          <div className="flex flex-col items-center gap-2">
            <div className="relative">
              <Avatar className="size-28">
                <AvatarImage src="https://github.com/j-s-leee.png" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <Button
                variant={"default"}
                size={"icon"}
                className="absolute right-0 bottom-0 rounded-full"
              >
                <CameraIcon className="size-4" />
              </Button>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <Input
                className="text-lg font-bold flex gap-1 items-center"
                defaultValue={"username"}
              />
              <span className="text-sm text-muted-foreground">@j-s-leee</span>
            </div>
          </div>
        </div>
        <Textarea
          className="text-muted-foreground"
          defaultValue={
            "take photo with x-t4, x100v and fujifilm x-e4 take photo with x-t4, x100v and fujifilm x-e4 take photo ..."
          }
        />

        <div className="grid grid-cols-2 gap-2">
          <Button variant={"outline"} className="w-full" asChild>
            <Link to="/my">취소</Link>
          </Button>
          <Button variant={"default"} className="w-full">
            저장
          </Button>
        </div>
      </div>
    </>
  );
}
