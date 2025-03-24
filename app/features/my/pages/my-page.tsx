import {
  ArrowLeftIcon,
  BookmarkIcon,
  PencilIcon,
  SettingsIcon,
} from "lucide-react";
import { Button } from "~/common/components/ui/button";
import { Link } from "react-router";
import { Avatar, AvatarImage } from "~/common/components/ui/avatar";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/common/components/ui/tabs";
import { BlurFade } from "~/common/components/magicui/blur-fade";

const recipeImages = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  url: `https://picsum.photos/seed/${i + 1}/800/600`,
}));

export default function MyPage() {
  return (
    <>
      <div className="w-full h-15 z-50 bg-background p-4 space-y-4">
        <div className="flex items-center justify-between gap-2">
          <Button variant={"ghost"} size={"icon"} asChild>
            <Link to="/my">
              <ArrowLeftIcon className="size-6" />
            </Link>
          </Button>
          <Button variant={"ghost"} size={"icon"} asChild>
            <Link to="/my/settings">
              <SettingsIcon className="size-6" />
            </Link>
          </Button>
        </div>
        <div className="flex flex-col px-3">
          <div className="flex flex-col items-center gap-2">
            <Avatar className="size-28">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-bold">username</p>
              <span className="text-sm text-muted-foreground">@j-s-leee</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground px-8">
          take photo with x-t4, x100v and fujifilm x-e4
          <br />
          take photo with x-t4, x100v and fujifilm x-e4 take photo ...
        </p>
        <div className="grid grid-cols-4 items-center p-3">
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold">1</span>
            <span className="text-sm text-muted-foreground">팔로워</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold">1.2K</span>
            <span className="text-sm text-muted-foreground">팔로잉</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold">1M</span>
            <span className="text-sm text-muted-foreground">좋아요</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold">142</span>
            <span className="text-sm text-muted-foreground">북마크</span>
          </div>
        </div>
        <Button variant={"outline"} className="w-full" asChild>
          <Link to="/my/edit-profile">
            <PencilIcon className="size-4" />
            프로필 수정
          </Link>
        </Button>
        <Button variant={"outline"} className="w-full">
          팔로우
        </Button>
        <Button variant={"default"} className="w-full">
          팔로잉
        </Button>
        <Tabs defaultValue="recipes">
          <TabsList className="grid w-full grid-cols-2 h-fit">
            <TabsTrigger value="recipes">
              <span className="">레시피</span>
            </TabsTrigger>
            <TabsTrigger value="photos">
              <span className="">사진</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="recipes">
            <div className="grid grid-cols-1 gap-2">
              {recipeImages.map((image) => (
                <BlurFade delay={0.5 + image.id * 0.05} key={image.id}>
                  <Link
                    to={`/recipes/${image.id}`}
                    className="aspect-[4/3] w-full"
                  >
                    <img
                      src={image.url}
                      alt="recipe"
                      className="w-full object-cover"
                    />
                  </Link>
                  <div className="flex flex-col p-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-semibold">SUPERIA 800</span>
                      <Button
                        className="flex gap-2 items-center"
                        variant={"ghost"}
                      >
                        <BookmarkIcon className="size-5" /> 12
                      </Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex gap-2"></span>
                      <div className="text-sm text-muted-foreground flex gap-1">
                        <span>2일전</span>
                        <span>·</span>
                        <span>1개의 댓글</span>
                      </div>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="photos">
            <div className="grid grid-cols-2 gap-2">
              {recipeImages.map((image) => (
                <BlurFade delay={0.5 + image.id * 0.05} key={image.id}>
                  <Link to={`/recipes/${image.id}`} className="">
                    <img
                      src={image.url}
                      alt="recipe"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </Link>
                </BlurFade>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
