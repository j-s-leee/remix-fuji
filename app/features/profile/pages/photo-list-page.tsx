import { ArrowLeftIcon, BookmarkIcon } from "lucide-react";
import { Button } from "~/common/components/ui/button";
import { Link, useParams, useLocation } from "react-router";
import { BlurFade } from "~/common/components/magicui/blur-fade";
import { useEffect } from "react";

// 임시 데이터
const recipeImages = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  url: `https://picsum.photos/seed/${i + 1}/800/600`,
}));

export default function PhotoListPage() {
  const { profileId } = useParams();
  const location = useLocation();
  const scrollToId = location.state?.scrollToId;

  useEffect(() => {
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [scrollToId]);

  return (
    <div className="w-full pb-20">
      <div className="sticky top-0 z-50 bg-background p-4 flex items-center gap-2 border-b">
        <Button variant={"ghost"} size={"icon"} asChild>
          <Link to={`/profile/${profileId}?tab=photos`}>
            <ArrowLeftIcon className="size-6" />
          </Link>
        </Button>
        <h1 className="text-lg font-semibold">사진</h1>
      </div>

      <div className="grid grid-cols-1 gap-2">
        {recipeImages.map((image) => (
          <BlurFade
            delay={0.5 + image.id * 0.05}
            key={image.id}
            className="border-b"
          >
            <div className="aspect-[4/3] w-full" id={`photo-${image.id}`}>
              <img
                src={image.url}
                alt="recipe"
                className="w-full object-cover"
              />
            </div>
            <div className="flex flex-col p-4">
              <div className="flex justify-between">
                <span className="text-lg font-semibold">SUPERIA 800</span>
                <Button className="flex gap-2 items-center" variant={"ghost"}>
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
    </div>
  );
}
