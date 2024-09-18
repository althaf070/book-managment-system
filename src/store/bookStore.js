import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./slice/bookSlice";

const bookStore = configureStore({
    reducer: {
        // allProducts: productsSlice,
        books: bookSlice,
    },
});

export default bookStore;


