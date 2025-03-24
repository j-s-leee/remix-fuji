import {
  ArrowLeftIcon,
  BookmarkCheckIcon,
  CirclePlusIcon,
  Heart,
  MessageCircleMoreIcon,
  SendIcon,
  UserPlusIcon,
} from "lucide-react";
import { Link, useParams } from "react-router";
import { Avatar, AvatarImage } from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/common/components/ui/carousel";
const recipeImages = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  url: `https://picsum.photos/seed/${i + 1}/800/600`,
}));
export default function RecipeDetailPage() {
  const { recipeId } = useParams();

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
              <CirclePlusIcon className="size-6" />
            </Link>
          </Button>
        </div>
        <Carousel opts={{ dragFree: true }}>
          <CarouselContent>
            {recipeImages.map((image) => (
              <CarouselItem key={image.id} className="basis-2/3">
                <img src={image.url} alt="recipe" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex px-3">
          <div className="flex items-center gap-2 flex-1">
            <Avatar className="size-12">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-bold">username</p>
              <span className="text-sm text-muted-foreground">@j-s-leee</span>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <Button variant={"default"} size={"icon"}>
              <UserPlusIcon className="size-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-4 items-center p-3">
          <div className="flex items-center justify-center gap-1">
            <Heart className="size-4" />
            <span>1</span>
          </div>
          <div className="flex items-center justify-center gap-1">
            <BookmarkCheckIcon className="size-4" />
            <span>1.2K</span>
          </div>
          <div className="flex items-center justify-center gap-1">
            <MessageCircleMoreIcon className="size-4" />
            <span>56</span>
          </div>
          <div className="flex items-center justify-center gap-1">
            <SendIcon className="size-4" />
            <span>142</span>
          </div>
        </div>
        <div className="flex justify-center">
          <Button variant={"default"} size={"lg"}>
            레시피 보기
          </Button>
        </div>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>SUPERIOR COLOR</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-12 text-center *:flex *:flex-col *:bg-accent *:m-1 *:rounded-md *:p-2">
            <div className="col-span-8">
              <span>Classic Neg.</span>
            </div>
            <div className="col-span-4">
              <span>DR400</span>
            </div>
            <div className="col-span-8">
              <span>DAYLIGHT</span>
              <span className="text-xs text-muted-foreground">R-1 / B-3</span>
            </div>
            <div className="col-span-4">
              <span>-4</span>
              <span className="text-xs text-muted-foreground">ISO NR</span>
            </div>
            <div className="col-span-6">
              <span>-1</span>
              <span className="text-xs text-muted-foreground">HIGHLIGHT</span>
            </div>
            <div className="col-span-6">
              <span>+1</span>
              <span className="text-xs text-muted-foreground">SHADOW</span>
            </div>
            <div className="col-span-4">
              <span>-1</span>
              <span className="text-xs text-muted-foreground">COLOR</span>
            </div>
            <div className="col-span-4">
              <span>0</span>
              <span className="text-xs text-muted-foreground">SHARPNESS</span>
            </div>
            <div className="col-span-4">
              <span>0</span>
              <span className="text-xs text-muted-foreground">CLARITY</span>
            </div>
            <div className="col-span-6">
              <span>STRONG</span>
              <span className="text-xs text-muted-foreground">
                COLOR CHROME
              </span>
            </div>
            <div className="col-span-6">
              <span>OFF</span>
              <span className="text-xs text-muted-foreground">FX BLUE</span>
            </div>
            <div className="col-span-6">
              <span>WEAK/LARGE</span>
              <span className="text-xs text-muted-foreground">GRAIN</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
