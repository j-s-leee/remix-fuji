import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("common/pages/home-page.tsx"),
  ...prefix("recipes", [
    index("features/recipes/pages/recipe-list-page.tsx"),
    route("create", "features/recipes/pages/recipe-create-page.tsx"),
    route("/:recipeId", "features/recipes/pages/recipe-detail-page.tsx"),
  ]),
  ...prefix("community", [
    index("features/community/pages/community-list-page.tsx"),
    route("create", "features/community/pages/community-create-page.tsx"),
    route("top", "features/community/pages/community-top-page.tsx"),
  ]),
  ...prefix("my", [
    index("features/my/pages/my-page.tsx"),
    route("notifications", "features/my/pages/notifications-page.tsx"),
    route("profile", "features/my/pages/profile-page.tsx"),
  ]),
] satisfies RouteConfig;
