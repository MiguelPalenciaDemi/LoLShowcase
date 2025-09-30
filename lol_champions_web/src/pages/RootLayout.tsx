import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        <h3>Menu Navigation</h3>
      </header>
      <Outlet />
    </>
  );
}
