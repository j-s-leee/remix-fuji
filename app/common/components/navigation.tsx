import { Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Separator } from "./ui/separator";
import { cn } from "~/lib/utils";

const menus = [
  {
    name: "Recipes",
    to: "/recipes",
    items: [
      {
        name: "All Recipes",
        description: "View all recipes",
        to: "/recipes",
      },
      {
        name: "Top Recipes",
        description: "See the top recipes",
        to: "/recipes?sort=top",
      },
      {
        name: "New Recipes",
        description: "See the latest recipes",
        to: "/recipes?sort=new",
      },
      {
        name: "Create Recipe",
        description: "Create a new recipe",
        to: "/recipes/create",
      },
    ],
  },
  {
    name: "Community",
    to: "/community",
    items: [
      {
        name: "All Posts",
        description: "See all posts in our community",
        to: "/community",
      },
      {
        name: "New Posts",
        description: "See the latest posts in our community",
        to: "/community?sort=new",
      },
      {
        name: "Create Post",
        description: "Create a new post to our community",
        to: "/community/create",
      },
    ],
  },
  {
    name: "About",
    to: "/about",
  },
  {
    name: "FAQ",
    to: "/faq",
  },
];

export default function Navigation() {
  return (
    <nav className="flex px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50">
      <div className="flex items-center">
        <Link to="/" className="font-bold text-lg tracking-tighter">
          Recipe App
        </Link>
        <Separator orientation="vertical" className="h-6 mx-4" />
        <NavigationMenu>
          <NavigationMenuList>
            {menus.map((menu) => (
              <NavigationMenuItem key={menu.name}>
                {menu.items ? (
                  <>
                    <Link to={menu.to}>
                      <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                    </Link>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        {menu.items.map((item) => (
                          <NavigationMenuItem
                            key={item.name}
                            className={cn([
                              "select-none rounded-md transition-colors focus:bg-accent hover:bg-accent",
                              item.to === "/recipes/create" &&
                                "bg-primary/10 hover:bg-primary/20 focus:bg-primary/20",
                            ])}
                          >
                            <NavigationMenuLink asChild>
                              <Link to={item.to}>
                                <span className="text-sm font-medium leading-none">
                                  {item.name}
                                </span>
                                <p className="text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link className={navigationMenuTriggerStyle()} to={menu.to}>
                    {menu.name}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
