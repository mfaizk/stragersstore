import { createBrowserRouter } from "react-router-dom";
import App from "../app";
import ErrorScreen from "../screens/ErrorScreen";
import SignInScreen from "../screens/SignInScreen";
import WelcomeScreen from "../screens/WelomeScreen";
import LoadingScreen from "../screens/LoadingScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorScreen />,
    loader: () => <LoadingScreen />,
  },
  {
    path: "/welcome",
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
    element: <SignInScreen />,
    errorElement: <ErrorScreen />,
    loader: () => <LoadingScreen />,
  },
]);
