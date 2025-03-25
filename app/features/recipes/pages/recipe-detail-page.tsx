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
import { AvatarCircles } from "~/common/components/magicui/avatar-circles";
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
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "~/common/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "~/common/components/ui/drawer";

const recipeImages = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  url: `https://picsum.photos/seed/${i + 1}/800/600`,
}));

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/safethecode",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59442788",
    profileUrl: "https://github.com/sanjay-mali",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/89768406",
    profileUrl: "https://github.com/itsarghyadas",
  },
];

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
        <div className="flex px-3">
          <h1 className="text-lg font-semibold">SUPERIOR COLOR</h1>
        </div>
        <div className="grid grid-cols-4 items-center p-3 gap-2">
          <Button
            variant={"ghost"}
            className="flex items-center justify-center gap-1"
          >
            <Heart className="size-4" />
            <span>1</span>
          </Button>
          <Button
            variant={"ghost"}
            className="flex items-center justify-center gap-1"
          >
            <BookmarkCheckIcon className="size-4" />
            <span>1.2K</span>
          </Button>
          <Button
            variant={"ghost"}
            className="flex items-center justify-center gap-1"
          >
            <MessageCircleMoreIcon className="size-4" />
            <span>56</span>
          </Button>
          <Button
            variant={"ghost"}
            className="flex items-center justify-center gap-1"
          >
            <SendIcon className="size-4" />
            <span>142</span>
          </Button>
        </div>
        <Carousel opts={{ dragFree: true }}>
          <CarouselContent>
            {recipeImages.map((image) => (
              <CarouselItem key={image.id} className="basis-10/12">
                <img
                  src={image.url}
                  alt="recipe"
                  className="rounded-md object-cover"
                />
                <div className="relative bottom-8 left-2 flex items-center gap-1">
                  <Avatar className="size-6">
                    <AvatarImage src="https://github.com/dillionverma.png" />
                  </Avatar>
                  <p className="text-sm text-white shadow-black bg-background/10">
                    dillionverma
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"default"} size={"lg"} className="w-full">
              레시피 보기
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>SUPERIOR COLOR</DialogTitle>
            <div className="grid grid-cols-12 text-center *:flex *:flex-col *:bg-accent *:m-1 *:rounded-md *:p-2">
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
            </div>
          </DialogContent>
        </Dialog>

        <Drawer>
          <DrawerContent>
            <DrawerTitle>Reply</DrawerTitle>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
