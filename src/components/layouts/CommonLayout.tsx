import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function CommonLayout() {
  return (
    <div className="w-full">
      <Header />
      <main className="pt-32">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
