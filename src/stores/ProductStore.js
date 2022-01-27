import { defineStore } from "pinia";
import products from "@/data/products.json";

export const useProductStore = defineStore("ProductStore", {
  // state
  // actions
  // getters
  state: () => {
    // Function was return initial state
    return {
      products,
    };
  },
});
