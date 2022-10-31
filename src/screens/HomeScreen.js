import React, { useEffect } from "react";
import useAuthStore from "../stores/authStore";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../configs/firebaseConfig";
import Body from "./Components/HomeScreenComponents/Body";
import Footer from "./Components/HomeScreenComponents/Footer";
import Header from "./Components/HomeScreenComponents/Header";
import useUserdetailStore from "../stores/userDetailStore";
import SideBar from "./Components/HomeScreenComponents/SideBar";
import useDataStore from "../stores/dataStore";
import TemporaryDataGenerator from "../models/TemporaryDataGenerator";
const HomeScreen = () => {
  const db = getDatabase(app);
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const udetailHandler = useUserdetailStore((state) => state.setUserDetail);
  const setProductList = useDataStore((state) => state.setProductList);

  useEffect(() => {
    setProductList(TemporaryDataGenerator());
    const dataRef = ref(db, "users/" + user.uid);
    onValue(dataRef, (snapshot) => {
      if (!snapshot.val()) {
        navigate("/userdetail", {
          state: { msg: "Enter information before continue" },
          replace: true,
        });
      } else {
        let e = snapshot.val();

        let data = {
          code: e.code,
          fName: e.fName,
          lName: e.lName,
          gender: e.gender,
          location: e.location,
          phNumber: e.phNumber,
        };
        udetailHandler(data);
      }
    });
  }, [db, navigate, udetailHandler, user.uid, setProductList]);

  return (
    <>
      <Header />
      <SideBar />

      <Body />
      <Footer />
    </>
  );
};

export default HomeScreen;
