import create from "zustand";
import { devtools } from "zustand/middleware";
import { getDatabase, set as setdb, ref } from "firebase/database";
import { app } from "../configs/firebaseConfig";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";

const database = getDatabase(app);
const auth = getAuth(app);
const userdetailStore = (set) => ({
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
        let d= {
          fName,
          lName,
          phNumber,
          gender,
          location,
          code,
        }
        set((state) => ({
          udetail: d,
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
