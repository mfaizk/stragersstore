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
import { FirebaseError } from "firebase/app";

const auth = getAuth(app);

const authStore = (set) => ({
  user: getAuth(app)?.currentUser,
  setUser: async (u) => {
    set((state) => ({
      user: u,
    }));
  },
  signupHandler: (email, password) => {
    let e = "OOps error occureed";
    toast
      .promise(
        createUserWithEmailAndPassword(auth, email, password),
        {
          pending: "Creating user account",
          success: "Account created Sucessfully",
          error: {
            render({ data }) {
              return data.message;
            },
          },
        },
        { position: window.innerWidth > 640 ? "top-right" : "bottom-right" }
      )
      .then((u) => {
        set((state) => ({
          user: u.user,
        }));
      })
      .catch((err) => {
        e = err.message;
        console.log(e);
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

    signInWithEmailAndPassword(auth, email, password)
      .then((u) => {
        set((state) => ({
          user: u.user,
        }));
        // toast.success("Logging in sucessfully", { toastId: toastId });
        toastHandler("Logging in sucessfully", toastId, "success");
      })
      .catch((err) => {
        // toast.error(e, { toastId: toastId });
        toastHandler(err.message, toastId, "error");
        console.log(err);
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
