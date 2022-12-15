import { devtools } from "zustand/middleware";
import create from "zustand";
import { toast } from "react-toastify";

const cartStore = (set) => ({
  cartData: [],
  currentAmt: 0,
  addtoCart: (data) => {
    set((state) => ({
      cartData: [data, ...state.cartData],
      currentAmt: Number(state.currentAmt) + Number(data.productPrice),
    }));
  },
  //not sure if it will work
  removeDataFromCart: (itemUid, index) => {
    // console.log("Removing item from cart");
    // console.log(itemUid);

    set((state) => ({
      currentAmt: Number(state.currentAmt) - state.cartData[index].productPrice,
      cartData: state.cartData.filter((e) => e.productUid !== itemUid),
    }));
    toast.info("Item removed");
  },
});

const useCartStore = create(devtools(cartStore));

export default useCartStore;
