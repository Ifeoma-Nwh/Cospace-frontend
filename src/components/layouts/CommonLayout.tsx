import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";

export default function CommonLayout() {
  return (
    <>
      <Header />
      <main className="my-4 h-3/5 container mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
