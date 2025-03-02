import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/common/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { MessageCircleIcon, HeartIcon, EyeIcon } from "lucide-react";
import { BlurFade } from "~/common/components/magicui/blur-fade";

interface PostCardProps {
  id: string | number;
  authorName: string;
  avatar: string;
  title: string;
  content: string;
  createdAt: string;
  stats: {
    views: number;
    comments: number;
    likes: number;
  };
  imageUrl?: string;
  delay?: number;
}

export function PostCard({
  id,
  authorName,
  avatar,
  title,
  content,
  createdAt,
  stats,
  imageUrl,
  delay = 0,
}: PostCardProps) {
  return (
    <Link to={`/community/post/${id}`} className="">
      <BlurFade delay={delay} inView>
        <Card>
          <CardHeader className="flex flex-row gap-2 items-center justify-between">
            <div className="flex flex-row gap-2 items-center">
              <Avatar className="size-8">
                <AvatarImage src={avatar} />
                <AvatarFallback>
                  {authorName.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm text-muted-foreground">by</span>
              <span className="text-sm">{authorName}</span>
            </div>
            <span className="text-sm text-muted-foreground">{createdAt}</span>
          </CardHeader>
          <CardContent className="space-y-2">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-sm text-muted-foreground line-clamp-3">
              {content}
            </p>
            <div className="flex flex-row gap-2 justify-end">
              <Button variant={"ghost"} size="sm">
                <EyeIcon className="size-4" />
                {stats.views}
              </Button>
              <Button variant={"ghost"} size="sm">
                <MessageCircleIcon className="size-4" />
                {stats.comments}
              </Button>
              <Button variant={"ghost"} size="sm">
                <HeartIcon className="size-4" />
                {stats.likes}
              </Button>
            </div>
          </CardContent>
          {imageUrl && (
            <CardFooter>
              <img
                className="size-full rounded-lg object-contain"
                src={imageUrl}
                alt={title}
                loading="lazy"
              />
            </CardFooter>
          )}
        </Card>
      </BlurFade>
    </Link>
  );
}
