import create from "zustand";
import { devtools } from "zustand/middleware";

const sideBarStateStore = (set) => ({
  isVisible: "translate-x-[-100%]",
  visibleSwitch: (currentState) => {
    // console.log(currentState);
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
});

const useSideBarStateStore = create(
  devtools(sideBarStateStore, { name: "udetail" })
);

export default useSideBarStateStore;
