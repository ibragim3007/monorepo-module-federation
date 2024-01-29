import { router } from "@/router/Router";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./global.module.scss";

const root = document.getElementById("root");

if (!root) {
  throw new Error("roor not found");
}

const container = createRoot(root);

container.render(<RouterProvider router={router} />);
