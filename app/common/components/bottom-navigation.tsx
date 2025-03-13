import { UserIcon, ScrollTextIcon, PencilIcon } from "lucide-react";
import { Link, useLocation } from "react-router";
import { Button } from "./ui/button";

const navigationItems = [
  {
    label: "작성",
    href: "/recipes/create",
    icon: PencilIcon,
  },
  {
    label: "레시피",
    href: "/recipes",
    icon: ScrollTextIcon,
  },
  {
    label: "프로필",
    href: "/my",
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
      </div>
    </nav>
  );
}
