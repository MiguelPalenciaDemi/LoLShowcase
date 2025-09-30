import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";
import ChampionDetailPage from "./pages/ChampionDetailPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/champions/:id", element: <ChampionDetailPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
