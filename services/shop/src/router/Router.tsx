import App from "@/components/app/App";
import { LazyShop } from "@/pages/shop/Shop.lazy";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/shop",
    element: (
      <Suspense fallback="Loading...">
        <LazyShop />
      </Suspense>
    ),
  },
];

export const router = createBrowserRouter(routes);

export default routes;
