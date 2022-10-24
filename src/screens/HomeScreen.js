import React from "react";
import useAuthStore from "../stores/authStore";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function HomeScreen() {
  const signOut = useAuthStore((state) => state.signOutHandler);
  const user = useAuthStore((state) => state.user);
  return (
    <div
      onClick={() => {
        signOut();
      }}
    >
      {"Welcome " + user?.email}
    </div>
  );
}

export default HomeScreen;
