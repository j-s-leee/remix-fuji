import { Link } from "react-router";
import Particle from "~/features/recipes/components/particle";
import { Button } from "../components/ui/button";
import { PostCard } from "~/features/community/components/post-card";
import { RecipeCard } from "~/features/recipes/components/recipe-card";

const postImages = Array.from({ length: 8 }, (_, i) => {
  const hasImage = i % 2 === 0 ? true : false;
  const isLandscape = true;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  return hasImage
    ? `https://picsum.photos/seed/${i + 1}/${width}/${height}`
    : undefined;
});

const recipeImages = Array.from({ length: 15 }, (_, i) => {
  const isLandscape = i % 3 === 0 ? true : false;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
});

export default function HomePage() {
  return (
    <main className="mx-auto space-y-40 container">
      <Particle />

      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4 [column-fill:_balance] p-4 md:p-0">
        <div className="mb-8">
          <h2 className="text-4xl font-bold leading-tight tracking-tight">
            Find your favorite recipes
          </h2>
          <p className="text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
          <Button variant={"link"} asChild>
            <Link to="/recipes">Explore all recipes &rarr;</Link>
          </Button>
        </div>
        {recipeImages.map((imageUrl, idx) => (
          <div key={idx} className="break-inside-avoid">
            <RecipeCard
              id={idx}
              imageUrl={imageUrl}
              filmSimulation="Classic Chrome"
              stats={{
                views: 27,
                likes: 3,
              }}
              delay={0.25 + idx * 0.15}
            />
          </div>
        ))}
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4 [column-fill:_balance]">
        <div className="mb-8">
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
        {postImages.map((imageUrl, idx) => (
          <div key={idx} className="break-inside-avoid">
            <PostCard
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
          </div>
        ))}
      </div>
    </main>
  );
}
