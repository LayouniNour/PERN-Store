import { create } from 'zustand'
import axios from 'axios'


const API_URL = 'http://localhost:3000'

export const useProductStore = create((set,get) => ({
    products: [],
    isLoading: false,
    error: null,
    fetchProducts: async () => {
        set({isLoading: true, error: null})
        try {
            const response = await axios.get(`${API_URL}/api/products`)
            set({products: response.data.data , error: null})
        } catch (err) {

            if (err.status === 429) {
                set({error: 'Too many requests, please try again later'})
            } else {
                set({error: 'something went wrong'})
            }
        } finally {
            set({isLoading: false})
        }
    }
}))