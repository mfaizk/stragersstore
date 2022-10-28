import React, { useEffect } from "react";
import useAuthStore from "../stores/authStore";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../configs/firebaseConfig";
function HomeScreen() {
  const db = getDatabase(app);
  const navigate = useNavigate();
  const signOut = useAuthStore((state) => state.signOutHandler);
  const user = useAuthStore((state) => state.user);
  useEffect(() => {
    const dataRef = ref(db, "users/" + user.uid);
    onValue(dataRef, (snapshot) => {
      if (!snapshot.val()) {
        navigate("/userdetail", {
          state: { msg: "Enter information before continue" },
          replace: true,
        });
      }
      console.log(snapshot.val());
    });
  }, [db, navigate, user.uid]);

  return (
    <div
      onClick={() => {
        signOut();
      }}
    >
      {"Welcome " + user?.email}
      <ToastContainer />
    </div>
  );
}

export default HomeScreen;
