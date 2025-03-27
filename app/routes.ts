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
    route(":recipeId", "features/recipes/pages/recipe-detail-page.tsx"),
    route(
      ":recipeId/photos/:photoId",
      "features/recipes/pages/recipe-photo-detail-page.tsx"
    ),
  ]),
  ...prefix("profile", [
    route(":profileId", "features/profile/pages/profile-page.tsx"),
    route(":profileId/edit", "features/profile/pages/edit-profile-page.tsx"),
    route(":profileId/settings", "features/profile/pages/settings-page.tsx"),
    route(":profileId/photos", "features/profile/pages/photo-list-page.tsx"),
  ]),
] satisfies RouteConfig;
