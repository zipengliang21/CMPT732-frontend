import { useRoutes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Home";
import NLP from "./NLP";
import RecommendedLocation from "./RecommendedLocation";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: (
        <Header />
      ),
      children: [
        { path: "/", element: <Home /> },
        { path: "nlp", element: <NLP /> },
        { path: "recommended_location", element: <RecommendedLocation /> },
      ]
    },
  ]);
}
