import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editBook } from "../store/slice/bookSlice";

const Edit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const book = useSelector((state) =>
    state.books.books.find((book) => book.id ==id)
  );

  const [title, setTitle] = useState(book ? book.title : "")
  const [author, setAuthor] = useState(book ? book.author : "")

  useEffect(() => {
    if (!book) {
      navigate("/");
    }
  }, [book, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const updatedBook = { id: id, title, author }
    dispatch(editBook(updatedBook))
    navigate("/")
  };

  return (
    <section>
      <h1 className="center-txt">Edit Your Book</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Enter your Book name"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="text"
          placeholder="Enter Book author"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
        <button onClick={handleSubmit}>Save Book</button>
      </div>
    </section>
  );
};

export default Edit;
