import React, { useEffect } from "react";
import useAuthStore from "../stores/authStore";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../configs/firebaseConfig";
import Body from "./Components/HomeScreenComponents/Body";
import Footer from './Components/HomeScreenComponents/Footer'
import Header from './Components/HomeScreenComponents/Header'
import useUserdetailStore from "../stores/userDetailStore";
const HomeScreen=()=> {
  const db = getDatabase(app);
  const navigate = useNavigate();
  const signOut = useAuthStore((state) => state.signOutHandler);
  const user = useAuthStore((state) => state.user);
  const udetailHandler=useUserdetailStore((state)=>state.setUserDetail)
  useEffect(() => {
    const dataRef = ref(db, "users/" + user.uid);
    onValue(dataRef, (snapshot) => {
      if (!snapshot.val()) {
        navigate("/userdetail", {
          state: { msg: "Enter information before continue" },
          replace: true,
        });
      }else{
       udetailHandler(JSON.parse(snapshot.val()))

      }
      
    });
  }, [db, navigate, user.uid]);

  return (
    <div
      // onClick={() => {
      //   signOut();
      // }}
    >
      {/* {"Welcome " + user?.email}
      <ToastContainer /> */}
      <Header />
    <Body />
    
    <Footer />
    </div>
  );
}

export default HomeScreen;
