import {
  ArrowLeftIcon,
  BookmarkIcon,
  CameraIcon,
  ChevronRight,
  InstagramIcon,
  PencilIcon,
  PlusIcon,
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
import { Separator } from "~/common/components/ui/separator";
import { Label } from "~/common/components/ui/label";
import { useParams } from "react-router";

export default function EditProfilePage() {
  const { profileId } = useParams();

  return (
    <>
      <div className="w-full h-15 z-50 bg-background p-4 space-y-6">
        <div className="flex items-center justify-between gap-2">
          <Button variant={"ghost"} size={"icon"} asChild>
            <Link to={`/profile/${profileId}`}>
              <ArrowLeftIcon className="size-6" />
            </Link>
          </Button>
        </div>

        <div className="flex justify-center items-center gap-2">
          <div className="relative">
            <Avatar className="size-20">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Button
              variant="secondary"
              size="icon"
              className="absolute bottom-0 right-0 size-6 rounded-full"
            >
              <CameraIcon className="size-4" />
            </Button>
          </div>
        </div>

        <div className="grid w-full gap-2">
          <Label htmlFor="username">username</Label>
          <Input
            type="text"
            id="username"
            placeholder="username"
            defaultValue="j-s-leee"
          />
        </div>

        <div className="grid w-full gap-2">
          <Label htmlFor="introduction">소개글</Label>
          <Textarea
            className="text-sm text-muted-foreground"
            placeholder="소개글을 작성해주세요."
            defaultValue="X-T4를 사용하고 있어요.클래식 크롬을 제일 좋아해요."
          />
        </div>

        <div className="grid w-full gap-2">
          <Label htmlFor="instagram">Instagram</Label>
          <Input
            type="text"
            id="instagram"
            placeholder="instagram"
            defaultValue="j-s-leee"
          />
        </div>

        <Button variant={"default"} className="w-full">
          저장
        </Button>
      </div>
    </>
  );
}
