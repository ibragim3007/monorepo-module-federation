import App from "@/components/app/App";
import { LazyAbout } from "@/pages/about/About.lazy";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/about",
    element: (
      <Suspense fallback="Loading...">
        <LazyAbout />
      </Suspense>
    ),
  },
];

export const router = createBrowserRouter(routes);

export default routes;
