import create from "zustand";
import { devtools } from "zustand/middleware";
import { toast } from "react-toastify";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../configs/firebaseConfig";

const auth = getAuth(app);

const authStore = (set) => ({
  user: getAuth(app)?.currentUser,
  isClicked: false,
  setUser: async (u) => {
    set((state) => ({
      user: u,
    }));
  },
  signupHandler: (email, password) => {
    const toastId = "signupUpdate";
    set((state) => ({
      isClicked: true,
    }));
    let e = "OOps error occureed";
    createUserWithEmailAndPassword(auth, email, password)
      .then((u) => {
        set((state) => ({
          user: u.user,
          isClicked: false,
        }));
        toastHandler("UAC created", toastId, "success");
      })
      .catch((err) => {
        toastHandler(err.message, toastId, "error");
        set((state) => ({
          isClicked: false,
        }));
      });
  },
  signOutHandler: () => {
    signOut(auth).then(() => {
      set((state) => ({
        user: null,
      }));
      // return <Navigate to={"/welcome"} replace={true} />;
    });
  },
  signinHandler: (email, password) => {
    const toastId = "signinUpdate";
    // toast.loading("logging in", { toastId: toastId });
    // toastHandler("logging in", toastId, "info");
    set((state) => ({
      isClicked: true,
    }));
    signInWithEmailAndPassword(auth, email, password)
      .then((u) => {
        set((state) => ({
          user: u.user,
          isClicked: false,
        }));
        // toast.success("Logging in sucessfully", { toastId: toastId });
        toastHandler("Logging in sucessfully", toastId, "success");
      })
      .catch((err) => {
        // toast.error(e, { toastId: toastId });
        toastHandler(err.message, toastId, "error");
        console.log(err);
        set((state) => ({
          isClicked: false,
        }));
      });
  },
});

const toastHandler = (msg, id, type) => {
  if (window.innerWidth > 640) {
    toast.dismiss(id);
    toast(msg, {
      position: "top-right",
      style: { backgroundColor: "#5e0098", color: "#fff" },
      type: type,
      toastId: id,
    });
  } else {
    toast.dismiss(id);
    toast(msg, {
      position: "bottom-right",
      style: { backgroundColor: "#5e0098", color: "#fff" },
      type: type,
      toastId: id,
    });
  }
};

const useAuthStore = create(devtools(authStore, { name: "user" }));

export default useAuthStore;
