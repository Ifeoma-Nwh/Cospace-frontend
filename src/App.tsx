import { Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import CommonLayout from "./components/layouts/CommonLayout";
import Home from "./routes/Home";
import About from "./routes/About";
import ErrorPage from "./routes/ErrorPage";
import City from "./routes/City";
import Account from "./routes/Account";
import useAuthContext from "./contexts/auth/useAuthContext";

export default function App() {
  const authContext = useAuthContext();
  const authUser = authContext?.state.authUser;
  return (
    <div className="w-screen min-h-screen bg-clr-white">
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Account authUser={authUser} />} />
          <Route path="cities/:city_id" element={<City />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}
