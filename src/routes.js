import { useRoutes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Home";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: (
        <Header />
      ),
      children: [
        { path: "/", element: <Home /> },
      ]
    },
  ]);
}
