import create from "zustand";
import { Navigate } from "react-router";
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
      return <Navigate to={"/welcome"} replace={true} />;
    });
  },
  signinHandler: (email, password) => {
    let e = "OOps error occureed";
    toast
      .promise(
        signInWithEmailAndPassword(auth, email, password),
        {
          pending: "Loggin In",
          success: "Logged In Sucess",
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
});

const useAuthStore = create(devtools(authStore, { name: "user" }));

export default useAuthStore;
