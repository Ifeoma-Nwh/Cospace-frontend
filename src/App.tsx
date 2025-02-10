import { Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import CommonLayout from "./components/layouts/CommonLayout";
import Home from "./routes/Home";
import About from "./routes/About";
import ErrorPage from "./routes/ErrorPage";
import City from "./routes/City";
import Account from "./routes/Account";
import useAuthContext from "./contexts/auth/useAuthContext";
import Admin from "./routes/Admin";
import AccountLayout from "./components/layouts/AccountLayout";

export default function App() {
  const authContext = useAuthContext();
  const authUser = authContext?.state.authUser;
  return (
    <div className="max-w-[95vw] container bg-clr-white">
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route index element={<Home />} />
          <Route
            path="dashboard"
            element={authUser?.roleId !== 3 && <Account authUser={authUser} />}
          />
          <Route
            path="admin"
            element={authUser?.roleId === 3 && <Admin authUser={authUser} />}
          />
          <Route path="cities/:city_id" element={<City />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="/my-account" element={<AccountLayout />}>
          <Route
            path="dashboard"
            element={authUser?.roleId !== 3 && <Account authUser={authUser} />}
          />
          <Route
            path="admin"
            element={authUser?.roleId === 3 && <Admin authUser={authUser} />}
          />
        </Route>
      </Routes>
    </div>
  );
}
