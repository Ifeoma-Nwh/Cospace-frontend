import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function AccountLayout() {
  return (
    <div className="container pt-5">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
