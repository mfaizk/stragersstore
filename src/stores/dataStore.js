import { devtools } from "zustand/middleware";
import create from "zustand";

const dataStore = (set) => ({
  productList: undefined,
  isLoading: false,
  cartList: [],

  setProductList: (data) => {
    // console.log(typeof data);
    set((state) => ({
      isLoading: true,
    }));
    set((state) => ({
      productList: data,
    }));
    set((state) => ({
      isLoading: false,
    }));
  },

  addItemToCart: (data) => {
    set((state) => ({
      cartList: [data, ...state.cartList],
    }));
  },
});

const useDataStore = create(devtools(dataStore, { name: "productList" }));

export default useDataStore;
