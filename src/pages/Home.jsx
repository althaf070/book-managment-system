import { Link } from 'react-router-dom';
import { deleteBook } from '../store/slice/bookSlice';
import './home.css'
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const books = useSelector((state) => state.books.books);
    const dispatch = useDispatch()
  return (
    <>
       <h1 className='center-txt'>Books</h1>
    <div className="home">
    {books && books.length > 0 ? (
          books.map((book) => (
            <div className="items" key={book.id}>
              <h1>Title: {book.title}</h1>
              <h1>Author: {book.author}</h1>
              <Link to={`/edit/${book.id}`}>Edit Book</Link>
              <button onClick={() => dispatch(deleteBook(book.id))}>
                Delete Book
              </button>
            </div>
          ))
        ) : (
          <p>No books found</p>
        )}
        
    </div>
    </>
  )
}

export default Home