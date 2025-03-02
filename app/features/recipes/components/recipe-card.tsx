import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import { BlurFade } from "~/common/components/magicui/blur-fade";
import { EyeIcon, HeartIcon } from "lucide-react";

interface RecipeCardProps {
  id: string | number;
  imageUrl: string;
  stats: {
    views: number;
    likes: number;
  };
  delay?: number;
}

export function RecipeCard({
  id,
  imageUrl,
  stats,
  delay = 0,
}: RecipeCardProps) {
  return (
    <Link to={`/recipes/${id}`} className="relative block">
      <BlurFade delay={delay} inView>
        <img
          src={imageUrl}
          alt="Recipe thumbnail"
          className="w-full rounded-lg object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-2 right-2 flex gap-2">
          <Button
            variant={"ghost"}
            size={"sm"}
            className="bg-background/80 backdrop-blur-sm"
          >
            <EyeIcon className="size-4" />
            {stats.views}
          </Button>
          <Button
            variant={"ghost"}
            size={"sm"}
            className="bg-background/80 backdrop-blur-sm"
          >
            <HeartIcon className="size-4" />
            {stats.likes}
          </Button>
        </div>
      </BlurFade>
    </Link>
  );
}
