import create from "zustand";
import { devtools } from "zustand/middleware";
import { toast } from "react-toastify";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { set as setF, ref, getDatabase } from "firebase/database";
import { app } from "../configs/firebaseConfig";

const auth = getAuth(app);

const authStore = (set) => ({
  user: {},
  isClicked: false,
  setUser: async (u) => {
    set((state) => ({
      user: u,
    }));
    // console.log(u);
  },
  signupHandler: (email, password, fName, lName, gender, nav) => {
    const db = getDatabase();
    const toastId = "signupUpdate";
    set((state) => ({
      isClicked: true,
    }));
    createUserWithEmailAndPassword(auth, email, password)
      .then((u) => {
        set((state) => ({
          user: u.user,
          isClicked: false,
        }));
        setF(ref(db, "users/" + u.user?.uid), {
          fName,
          lName,
          gender,
          email,
        }).then(() => {
          toastHandler("UAC Data created", toastId, "success");
        });

        toastHandler("UAC created", toastId, "success");
        nav("/home");
      })
      .catch((err) => {
        toastHandler(err.message, toastId, "error");
        set((state) => ({
          isClicked: false,
        }));
      });
  },
  signOutHandler: (navigate) => {
    signOut(auth).then(() => {
      set((state) => ({
        user: null,
      }));

      navigate("/");
      // return <Navigate to={"/welcome"} replace={true} />;
    });
  },
  signinHandler: (email, password, nav) => {
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
        // console.log(this.user);

        nav("/home");
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
