import { devtools } from "zustand/middleware";
import create from "zustand";

const dataStore = (set) => ({
  productList: undefined,
  isLoading: false,
  cartList: [],
  userDetail: {},

  // Product List Controller Start

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
  // Product List Controller End

  //Cart List Controller Start

  addItemToCart: (data) => {
    set((state) => ({
      cartList: [data, ...state.cartList],
    }));
  },
  //Cart List Controller End

  // User Detail Controller Start
  setUserDetail: (email, fName, lName, gender) => {
    set((state) => ({
      userDetail: { email, fName, lName, gender },
    }));
  },
  // User Detail Controller End
});

const useDataStore = create(devtools(dataStore, { name: "productList" }));

export default useDataStore;
