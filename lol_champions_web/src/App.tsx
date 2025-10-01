import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";
import ChampionDetailPage from "./pages/ChampionDetailPage";
import ChampionContextProvider from "./store/champion-ctx";

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
  return (
    <ChampionContextProvider>
      <RouterProvider router={router} />
    </ChampionContextProvider>
  );
}

export default App;
