import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import { BlurFade } from "~/common/components/magicui/blur-fade";
import { EyeIcon, FilmIcon, HeartIcon } from "lucide-react";

interface RecipeCardProps {
  id: string | number;
  imageUrl: string;
  filmSimulation: string;
  stats: {
    views: number;
    likes: number;
  };
  delay?: number;
}

export function RecipeCard({
  id,
  imageUrl,
  filmSimulation,
  stats,
  delay = 0.25,
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
        <div className="absolute bottom-2 right-2 flex flex-row-reverse flex-wrap-reverse gap-2">
          <Button
            variant={"ghost"}
            size={"sm"}
            className="text-xs bg-background/30 backdrop-blur-sm"
          >
            <EyeIcon className="size-3" />
            {stats.views}
          </Button>
          <Button
            variant={"ghost"}
            size={"sm"}
            className="text-xs bg-background/30 backdrop-blur-sm"
          >
            <HeartIcon className="size-3" />
            {stats.likes}
          </Button>
          <Button
            variant={"ghost"}
            size={"sm"}
            className="text-xs bg-background/30 backdrop-blur-sm"
          >
            <FilmIcon className="size-3" />
            {filmSimulation}
          </Button>
        </div>
      </BlurFade>
    </Link>
  );
}
