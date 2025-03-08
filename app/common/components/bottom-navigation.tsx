import {
  HomeIcon,
  LayoutDashboardIcon,
  MenuIcon,
  UserIcon,
  Users2Icon,
  ScrollTextIcon,
  PencilIcon,
} from "lucide-react";
import { Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuGroup,
} from "./ui/dropdown-menu";

type NavigationItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  getCreateLink?: (pathname: string) => string;
  getLabel?: (pathname: string) => string;
  isDisabled?: (pathname: string) => boolean;
};

const navigationItems: NavigationItem[] = [
  {
    label: "홈",
    href: "/",
    icon: HomeIcon,
  },
  {
    label: "레시피",
    href: "/recipes",
    icon: ScrollTextIcon,
  },
  {
    label: "작성",
    href: "#",
    icon: PencilIcon,
    getCreateLink: (pathname: string) => {
      if (pathname.startsWith("/recipes")) return "/recipes/create";
      if (pathname.startsWith("/community")) return "/community/create";
      return "#";
    },
    getLabel: (pathname: string) => {
      if (pathname.startsWith("/recipes")) return "레시피 작성";
      if (pathname.startsWith("/community")) return "글 작성";
      return "작성";
    },
    isDisabled: (pathname: string) => {
      return pathname === "/";
    },
  },
  {
    label: "커뮤니티",
    href: "/community",
    icon: Users2Icon,
  },
];

const menus = [
  {
    label: "대시보드",
    href: "/my/dashboard",
    icon: LayoutDashboardIcon,
  },
  {
    label: "프로필",
    href: "/my/profile",
    icon: UserIcon,
  },
];

export function BottomNavigation() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t bg-background">
      <div className="flex justify-around items-center h-18">
        {navigationItems.map((item) => {
          const isActive = location.pathname === item.href;

          if (
            item.href === "#" &&
            item.getCreateLink &&
            item.getLabel &&
            item.isDisabled
          ) {
            const createLink = item.getCreateLink(location.pathname);
            const label = item.getLabel(location.pathname);
            const isDisabled = item.isDisabled(location.pathname);

            return (
              <Button
                asChild
                variant={"ghost"}
                key={item.href}
                className="gap-1"
              >
                <Link
                  to={createLink}
                  className={`flex flex-col items-center justify-center flex-1 h-full
                  ${
                    isDisabled
                      ? "pointer-events-none opacity-50"
                      : createLink === location.pathname
                      ? "text-primary"
                      : "text-muted-foreground"
                  }
                  transition-colors`}
                >
                  <item.icon className="size-6" />
                  <span className="text-xs">{label}</span>
                </Link>
              </Button>
            );
          }

          return (
            <Button asChild variant={"ghost"} key={item.href} className="gap-1">
              <Link
                to={item.href}
                className={`flex flex-col items-center justify-center flex-1 h-full
                ${isActive ? "text-primary" : "text-muted-foreground"}
                transition-colors`}
              >
                <item.icon className="size-6" />
                <span className="text-xs">{item.label}</span>
              </Link>
            </Button>
          );
        })}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={"ghost"}
              className="flex flex-col items-center justify-center flex-1 h-full text-muted-foreground gap-1"
            >
              <MenuIcon className="size-6" />
              <span className="text-xs">메뉴</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-60">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <DropdownMenuLabel>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-muted-foreground">john@doe.com</p>
              </DropdownMenuLabel>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {menus.map((menu) => (
                <DropdownMenuItem asChild key={menu.href}>
                  <Link to={menu.href}>
                    <menu.icon className="size-5" />
                    <span>{menu.label}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
