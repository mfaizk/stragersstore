import { createBrowserRouter } from "react-router-dom";
import ErrorScreen from "../screens/ErrorScreen";
import SignInScreen from "../screens/SignInScreen";
import WelcomeScreen from "../screens/WelomeScreen";
import LoadingScreen from "../screens/LoadingScreen";
import SignUpScreen from "../screens/SignUpScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomeScreen />,
    errorElement: <ErrorScreen />,
    loader: () => <LoadingScreen />,
  },
  {
    path: "/signin",
    element: <SignInScreen />,
    errorElement: <ErrorScreen />,
    loader: () => <LoadingScreen />,
  },
  {
    path: "/signup",
    element: <SignUpScreen />,
    errorElement: <ErrorScreen />,
    loader: () => <LoadingScreen />,
  },
]);
