import { createBrowserRouter } from "react-router-dom";
import Pages from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Pages />,
    children: [
      {
        path: "our-projects",
        element: <Pages />,
      },
      {
        path: "about-us",
        element: <Pages />,
      },
      {
        path: "contact-us",
        element: <Pages />,
      },
    ],
  },
]);
