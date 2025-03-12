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
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import {
  BellIcon,
  LogOutIcon,
  UserIcon,
  LayoutDashboardIcon,
  MessageCircleIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
} from "./ui/dropdown-menu";
const menus = [
  {
    name: "Recipes",
    to: "/recipes",
    items: [
      {
        name: "All Recipes",
        description: "See all recipes",
        to: "/recipes",
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
        name: "Top Posts",
        description: "See the top posts in our community",
        to: "/community?sort=top",
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
];

export default function Navigation({
  isLoggedIn,
  hasMessages,
  hasNotifications,
}: {
  isLoggedIn: boolean;
  hasMessages: boolean;
  hasNotifications: boolean;
}) {
  return (
    <nav className="hidden md:flex px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50">
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
                      <NavigationMenuTrigger className="cursor-pointer">
                        {menu.name}
                      </NavigationMenuTrigger>
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
                              <Link to={item.to} className="h-full">
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
      {isLoggedIn ? (
        <div className="flex gap-2">
          <Button size={"icon"} variant={"ghost"} asChild className="relative">
            <Link to="/notifications">
              <BellIcon className="w-4 h-4" />
              {hasNotifications && (
                <div className="bg-red-500 rounded-full size-2 absolute top-1.5 right-1.5"></div>
              )}
            </Link>
          </Button>
          <Button size={"icon"} variant={"ghost"} asChild className="relative">
            <Link to="/my/messages">
              <MessageCircleIcon className="w-4 h-4" />
              {hasMessages && (
                <span className="bg-red-500 rounded-full size-2 absolute top-1.5 right-1.5"></span>
              )}
            </Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-muted-foreground">john@doe.com</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link to="/my/dashboard">
                    <LayoutDashboardIcon />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/my/profile">
                    <UserIcon />
                    Profile
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/auth/logout">
                  <LogOutIcon />
                  Logout
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div className="flex gap-2">
          <Button asChild variant={"secondary"}>
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link to="/join">Join</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
