import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function AccountLayout() {
  return (
    <>
      <Header />
      <main className="h-screen pt-32">
        <Outlet />
      </main>
    </>
  );
}
