import create from "zustand";
import { devtools } from "zustand/middleware";
import { getDatabase, set as setdb, ref } from "firebase/database";
import { app } from "../configs/firebaseConfig";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";

const database = getDatabase(app);
const auth = getAuth(app);
const userdetailStore = (set) => ({
  isVisible: "translate-y-full",
  visibleSwitch: (currentState) => {
    if (currentState === "translate-x-[-100%]") {
      set((state) => ({
        isVisible: "translate-x-[0%]",
      }));
    } else {
      set((state) => ({
        isVisible: "translate-x-[-100%]",
      }));
    }
  },
  udetail: {},
  setUserDetail: (d) => {
    set((state) => ({
      udetail: d,
    }));
  },
  setDetailInDb: ({
    fName,
    lName,
    phNumber,
    gender,
    location,
    code,
    navigate,
  }) => {
    setdb(ref(database, "users/" + auth.currentUser.uid), {
      fName,
      lName,
      phNumber,
      gender,
      location,
      code,
    })
      .then(() => {
        toast.success("Info Saved");
        set((state) => ({
          udetail: {
            fName,
            lName,
            phNumber,
            gender,
            location,
            code,
          },
        }));

        navigate("/home");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  },
});

const useUserdetailStore = create(
  devtools(userdetailStore, { name: "udetail" })
);

export default useUserdetailStore;
