import "./styles/App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { ResultPage } from "./components/ResultPage";
import { Auth } from "./components/AuthPage";
import { MainPage } from "./components/MainPage";
import { AuthErrorPage } from "./components/AuthErrorPage";
import { SearchPage } from "./components/SearchPage";

import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { ResultProvider } from "./context/resultProvider";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
      <div className="App">

        <Header isAuth={isAuth} setIsAuth={setIsAuth} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
              path="/auth"
              element={!isAuth ? <Auth isAuth={isAuth} setIsAuth={setIsAuth} /> : <Navigate to="/" />}
          />

          <Route element={isAuth ? <Outlet /> : <Navigate to="/auth" />}>
            <Route
                path="/search"
                element={
                  <ResultProvider>
                    <SearchPage />
                  </ResultProvider>
                }
            />
            <Route
                path="/result"
                element={
                  <ResultProvider>
                    <ResultPage />
                  </ResultProvider>
                }
            />
          </Route>
          <Route path="/error" element={<AuthErrorPage />} />
        </Routes>
        <Footer />

      </div>
  );
}

export default App;
