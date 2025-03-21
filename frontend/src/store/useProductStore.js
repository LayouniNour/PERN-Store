import { create } from "zustand";
import axios from "axios";
import { toast } from "react-hot-toast";

const API_URL = "http://localhost:3000";

export const useProductStore = create((set, get) => ({
  products: [],
  isLoading: false,
  error: null,

  formData: {
    name: "",
    image: "",
    price: "",
  },

  setFormData: (formData) => {
    set({ formData });
  },
 
  resetFormData: () => {
    set({ formData: { name: "", image: "", price: "" } });
  },

  addProduct: async () => {
    set({ isLoading: true, error: null });
    try {
      const { formData } = get();
      await axios.post(`${API_URL}/api/products`, formData);
      await get().fetchProducts();
      get().resetFormData();
      toast.success("Product added successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      set({ isLoading: false });
    }
  },

  fetchProducts: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/api/products`);
      set({ products: response.data.data, error: null });
    } catch (err) {
      if (err.status === 429) {
        set({
          error: "Too many requests, please try again later",
          products: [],
        });
      } else {
        set({ error: "something went wrong", products: [] });
      }
    } finally {
      set({ isLoading: false });
    }
  },


  deleteProduct: async (id) => {
    set({ isLoading: true, error: null });
    try {
      await axios.delete(`${API_URL}/api/products/${id}`);
      set({ products: get().products.filter((product) => product.id !== id) });
      toast.success("Product deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      set({ isLoading: false });
    }
  },
}));
