import {
  ArrowLeftIcon,
  BookmarkIcon,
  InstagramIcon,
  PencilIcon,
  SettingsIcon,
} from "lucide-react";
import { Button } from "~/common/components/ui/button";
import { Link, useParams, useSearchParams } from "react-router";
import { Avatar, AvatarImage } from "~/common/components/ui/avatar";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/common/components/ui/tabs";
import { BlurFade } from "~/common/components/magicui/blur-fade";
import { Separator } from "~/common/components/ui/separator";

const recipeImages = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  url: `https://picsum.photos/seed/${i + 1}/800/600`,
}));

export default function ProfilePage() {
  const { profileId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get("tab") || "recipes";

  return (
    <>
      <div className="w-full h-15 z-50 bg-background p-4 space-y-4">
        <div className="flex items-center justify-between gap-2">
          <Button variant={"ghost"} size={"icon"} asChild>
            <Link to={`/profile/${profileId}`}>
              <ArrowLeftIcon className="size-6" />
            </Link>
          </Button>
          <Button variant={"ghost"} size={"icon"} asChild>
            <Link to={`/profile/${profileId}/settings`}>
              <SettingsIcon className="size-6" />
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Avatar className="size-20">
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
          <div className="flex flex-col gap-2">
            <p className="text-xl">{profileId}</p>
            <div className="flex gap-2 text-center">
              <span className="text-sm text-muted-foreground">팔로워</span>
              <span className="text-sm">123</span>
              <Separator orientation="vertical" />
              <span className="text-sm text-muted-foreground">팔로잉</span>
              <span className="text-sm">2</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          X-T4를 사용하고 있어요.
          <br />
          클래식 크롬을 제일 좋아해요.
        </p>
        <span className="text-sm text-muted-foreground flex items-center gap-1">
          <InstagramIcon className="size-4" />
          j-s-leee
        </span>

        <Button variant={"outline"} className="w-full" asChild>
          <Link to={`/profile/${profileId}/edit`}>
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
        <Tabs
          defaultValue={tab}
          onValueChange={(value) => {
            setSearchParams({ tab: value });
          }}
          className="pb-20"
        >
          <TabsList className="grid w-full grid-cols-2 h-fit">
            <TabsTrigger value="recipes">
              레시피 <span className="text-xs">123</span>
            </TabsTrigger>
            <TabsTrigger value="photos">
              사진 <span className="text-xs">547</span>
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
                  <Link
                    to={`/profile/${profileId}/photos`}
                    className="block"
                    state={{ scrollToId: `photo-${image.id}` }}
                  >
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
