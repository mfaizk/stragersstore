import { devtools } from "zustand/middleware";
import create from "zustand";

const cartStore = (set) => ({
  cartData: [],

  addtoCart: (data) => {
    set((state) => ({
      cartData: [data, ...state.cartData],
    }));
  },
  //not sure if it will work
  removeDataFromCart: (itemUid) => {
    set((state) => ({
      cartData: state.data.filter((e) => e.uid !== itemUid),
    }));
  },
});

const useCartStore = create(devtools(cartStore));

export default useCartStore;
