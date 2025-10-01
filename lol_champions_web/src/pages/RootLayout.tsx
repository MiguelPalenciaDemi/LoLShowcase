import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ChampionContext } from "../store/champion-ctx";

export default function RootLayout() {
  const {version} = useContext(ChampionContext);
  return (
    <>
      <header>
        <h3>Cuurent version: {version}</h3>
      </header>
      <Outlet />
    </>
  );
}
