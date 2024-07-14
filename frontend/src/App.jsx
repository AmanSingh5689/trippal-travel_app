import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";
import AppLayout from "./ui/AppLayout";
import Aboutus from "./pages/Aboutus";
import Account from "./pages/Account";
import CityDetails from "./pages/CityDetails";
import Hotels from "./pages/Hotels";
import Flights from "./pages/Flights";
import PageNotFound from "./pages/PageNotFound";
import Logout from "./components/Logout";
import ProtectedRoute from "./ui/ProtectedRoute";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [searchResult, setSearchResult] = useState(() => {
    const savedResult = localStorage.getItem("searchResult");
    return savedResult ? JSON.parse(savedResult) : [];
  });

  // useEffect to update local storage whenever 'searchResult' changes
  useEffect(() => {
    localStorage.setItem("searchResult", JSON.stringify(searchResult));
  }, [searchResult]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate replace to="home" />} />
          <Route
            path="home"
            element={
              <Homepage
                searchResult={searchResult}
                onSearchResult={setSearchResult}
              />
            }
          />
          <Route path="about" element={<Aboutus />} />
          <Route path="account" element={<Account user={user} />} />
          <Route path="logout" element={<Logout />} />
          <Route
            path="city/:cityName"
            element={<CityDetails cityData={searchResult} />}
          />
          <Route path="hotels/:cityName" element={<Hotels />} />
          <Route path="flights/:cityName" element={<Flights />} />
        </Route>
        <Route
          path="signup"
          element={<Signup onLogin={setIsLoggedIn} onSetUsername={setUser} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
