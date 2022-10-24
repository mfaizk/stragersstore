import React from "react";
import useAuthStore from "../stores/authStore";

function HomeScreen() {
  const signOut = useAuthStore((state) => state.signOutHandler);
  return (
    <div
      onClick={() => {
        signOut();
      }}
    >
      HomeScreen
    </div>
  );
}

export default HomeScreen;
