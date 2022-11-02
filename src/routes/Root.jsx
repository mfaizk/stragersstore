import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelomeScreen from "../screens/WelomeScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import AuthHandler from "../middleware/AuthHandler";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import useAuthStore from "../stores/authStore";
import { app } from "../configs/firebaseConfig";
import { getAuth } from "firebase/auth";
const Root = () => {
  const auth = getAuth(app);
  const setUser = useAuthStore((state) => state.setUser);
  useEffect(() => {
    auth.onAuthStateChanged((u) => {
      setUser(u);
      // console.log(u);
    });
  }, [auth, setUser]);

  return (
    <BrowserRouter basename="/">
      <ToastContainer />
      <Routes>
        {/* Public route started */}
        <Route path="/" element={<WelomeScreen />} />
        <Route path="/signin" element={<SignInScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        {/* Public route end */}

        {/* Private route start */}
        <Route element={<AuthHandler />}>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="cart" element={<CartScreen />} />
        </Route>
        {/* Private route end */}
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
