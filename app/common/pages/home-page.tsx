import { Link } from "react-router";
import Particle from "~/features/recipes/components/particle";
import { Button } from "../components/ui/button";
import { PostCard } from "~/features/community/components/post-card";

const images = Array.from({ length: 8 }, (_, i) => {
  //   const isLandscape = i % 2 === 0;
  const isLandscape = true;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
});

export default function HomePage() {
  return (
    <main className="mx-auto space-y-40 container">
      <Particle />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div>
          <h2 className="text-4xl font-bold leading-tight tracking-tight">
            Welcome to the community!
          </h2>
          <p className="text-lg text-muted-foreground">
            This is the community page. Here you can find all the posts and
            comments.
          </p>
          <Button variant={"link"} asChild>
            <Link to="/community">Explore all posts &rarr;</Link>
          </Button>
        </div>

        {images.map((imageUrl, idx) => (
          <PostCard
            key={idx}
            id={idx}
            authorName="j-s-leee"
            avatar="https://github.com/shadcn.png"
            title="title of post"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
            createdAt="1일전"
            stats={{
              views: 123,
              comments: 3,
              likes: 12,
            }}
            imageUrl={imageUrl}
            delay={0.25 + idx * 0.15}
          />
        ))}
      </div>
    </main>
  );
}
