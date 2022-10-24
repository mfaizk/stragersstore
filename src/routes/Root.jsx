import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ErrorScreen from "../screens/ErrorScreen";
import SignInScreen from "../screens/SignInScreen";
import WelcomeScreen from "../screens/WelomeScreen";
import SignUpScreen from "../screens/SignUpScreen";
import HomeScreen from "../screens/HomeScreen";
import LoadingScreen from "../screens/LoadingScreen";
import useAuthStore from "../stores/authStore";
import { useEffect, useState } from "react";
import { app } from "../configs/firebaseConfig";
import { getAuth } from "firebase/auth";
const Root = () => {
  const [initUser, setInitUser] = useState("");
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);
  useEffect(() => {
    getAuth(app).onAuthStateChanged((u, e, c) => {
      setUser(u);
      setInitUser(u);
      console.log(u);
    });
  }, []);

  return initUser == "" ? (
    <LoadingScreen />
  ) : (
    <BrowserRouter basename="/">
      <Routes>
        <Route
          path="/"
          element={
            initUser ? (
              <Navigate to={"/home"} replace={true} />
            ) : (
              <WelcomeScreen />
            )
          }
          errorElement={<ErrorScreen />}
        />
        <Route
          path={"/home"}
          element={user ? <HomeScreen /> : <Navigate to={"/"} replace={true} />}
          errorElement={<ErrorScreen />}
        />
        <Route
          path="/welcome"
          element={
            user ? <Navigate to={"/"} replace={true} /> : <WelcomeScreen />
          }
          errorElement={<ErrorScreen />}
        />
        <Route
          path="/signin"
          element={
            user ? <Navigate to={"/"} replace={true} /> : <SignInScreen />
          }
          errorElement={<ErrorScreen />}
        />
        <Route
          path="/signup"
          element={
            user ? <Navigate to={"/"} replace={true} /> : <SignUpScreen />
          }
          errorElement={<ErrorScreen />}
        />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
