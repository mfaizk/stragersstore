import React from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import useAuthStore from "../stores/authStore";
import Header from "../screens/Components/HomeScreenComponents/Header";
import SideBar from "../screens/Components/HomeScreenComponents/SideBar";
import { useEffect } from "react";
import useDataStore from "../stores/dataStore";
import TemporaryDataGenerator from "../models/TemporaryDataGenerator";

const AuthHandler = () => {
  const user = useAuthStore((state) => state.user);
  const location = useLocation();
  const setTemporaryData = useDataStore((state) => state.setProductList);
  useEffect(() => {
    // console.log("Auth Runned");
    // console.log(user?.email);
    setTemporaryData(TemporaryDataGenerator());
  }, [user, setTemporaryData]);

  return (
    <>
      {user ? (
        <>
          <Header />
          <SideBar />
          <Outlet />
        </>
      ) : (
        <Navigate to={"/"} replace={true} state={{ from: location }} />
      )}
    </>
  );
};

export default AuthHandler;
