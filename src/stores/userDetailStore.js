import create from "zustand";
import { devtools } from "zustand/middleware";

const userdetailStore = (set) => ({
  udetail: {},
  setUserDetail: (d) => {
    set((state) => ({
      udetail: d,
    }));
  },
});

const useAuthStore = create(devtools(userdetailStore, { name: "udetail" }));

export default useAuthStore;
