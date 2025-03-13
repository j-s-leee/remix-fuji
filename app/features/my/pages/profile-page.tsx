import { ArrowLeftIcon, BookmarkIcon, MoreHorizontalIcon } from "lucide-react";
import { Link } from "react-router";
import { Avatar, AvatarImage } from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "~/common/components/ui/tabs";

const recipeImages = Array.from({ length: 15 }, (_, i) => {
  const isLandscape = i % 3 === 0 ? true : false;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
});

export default function ProfilePage() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-15 z-50 bg-background">
        <div className="flex items-center justify-between p-3">
          <Button variant={"ghost"} size={"icon"} asChild>
            <Link to="/my">
              <ArrowLeftIcon className="size-6" />
            </Link>
          </Button>
          <Button variant={"ghost"} size={"icon"}>
            <MoreHorizontalIcon className="size-6" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-3 pt-15">
        <div className="flex items-center gap-2">
          <Avatar className="size-20">
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
          <div className="flex flex-col gap-1">
            <p className="text-lg font-bold">username</p>
            <p className="text-sm text-muted-foreground">@j-s-leee</p>
          </div>
        </div>
        <div className="flex gap-16">
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">100</p>
            <p className="text-sm text-muted-foreground">팔로워</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">1.2K</p>
            <p className="text-sm text-muted-foreground">팔로잉</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">1M</p>
            <p className="text-sm text-muted-foreground">좋아요</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">소개</p>
          <p className="text-sm">안녕하세요! 저는 소개글을 작성합니다.</p>
        </div>
        <Tabs defaultValue="recipes" className="w-full">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="recipes">레시피</TabsTrigger>
            <TabsTrigger value="likes">즐겨찾기</TabsTrigger>
          </TabsList>
          <TabsContent value="recipes">
            <div className="gap-0.5 grid grid-cols-2">
              {recipeImages.map((image) => (
                <div key={image} className="w-full aspect-[4/3]">
                  <img src={image} alt="recipe" className="w-full h-full" />
                  <div className="bg-accent/30">
                    <p className="px-2 py-1 font-semibold text-muted-foreground flex items-center justify-between">
                      <span className="text-muted-foreground">recipe name</span>
                      <span className="text-muted-foreground flex items-center gap-1">
                        <BookmarkIcon className="size-4" /> 12.1K
                      </span>
                    </p>
                    <p className="px-2 py-1 text-xs text-muted-foreground flex items-center gap-1">
                      <Avatar className="size-4">
                        <AvatarImage src="https://github.com/shadcn.png" />
                      </Avatar>
                      username
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="likes">
            <div className="gap-0.5 grid grid-cols-2">
              {recipeImages.map((image) => (
                <div key={image} className="w-full aspect-[4/3]">
                  <img src={image} alt="recipe" className="w-full h-full" />
                  <p className="px-2 py-1 font-semibold text-muted-foreground flex items-center justify-between">
                    <span className="text-muted-foreground">recipe name</span>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <BookmarkIcon className="size-4" /> 12.1K
                    </span>
                  </p>
                  <p className="px-2 py-1 text-xs text-muted-foreground flex items-center gap-1">
                    <Avatar className="size-4">
                      <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>
                    username
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
