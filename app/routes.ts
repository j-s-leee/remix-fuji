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
    ...prefix("leaderboards", [
      index("features/recipes/pages/leaderboard-page.tsx"),
      route(
        "/yearly/:year",
        "features/recipes/pages/yearly-leaderboard-page.tsx"
      ),
      route(
        "/monthly/:year/:month",
        "features/recipes/pages/monthly-leaderboard-page.tsx"
      ),
      route(
        "/weekly/:year/:month/:week",
        "features/recipes/pages/weekly-leaderboard-page.tsx"
      ),
      route(
        "/daily/:year/:month/:day",
        "features/recipes/pages/daily-leaderboard-page.tsx"
      ),
    ]),
    ...prefix("film-simulations", [
      index("features/recipes/pages/film-simulations-page.tsx"),
      route(
        "/:filmSimulation",
        "features/recipes/pages/film-simulation-page.tsx"
      ),
    ]),
    ...prefix("cameras", [
      index("features/recipes/pages/cameras-page.tsx"),
      route("/:camera", "features/recipes/pages/camera-page.tsx"),
    ]),
  ]),
  ...prefix("community", [
    index("features/community/pages/community-list-page.tsx"),
    route("create", "features/community/pages/community-create-page.tsx"),
    route("top", "features/community/pages/community-top-page.tsx"),
  ]),
] satisfies RouteConfig;
