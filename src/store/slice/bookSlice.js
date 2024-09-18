import { createSlice } from "@reduxjs/toolkit"

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: []
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload)
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter(book => book.id !== action.payload)
    },
    editBook: (state, action) => {
      const { id, title, author } = action.payload;
      const book = state.books.find(book => book.id ===id)
      if (book) {
        book.title = title
        book.author = author
      }
    }
  }
});

export const { addBook, deleteBook, editBook } = bookSlice.actions
export default bookSlice.reducer
