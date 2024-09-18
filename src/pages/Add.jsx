import { useDispatch } from "react-redux"
import "./add.css";
import { useState } from "react"
import { addBook } from "../store/slice/bookSlice"
import { useNavigate } from "react-router-dom"
const Add = () => {
  const dispatch = useDispatch()
  const naviagate = useNavigate()
  const [title, settitle] = useState("")
  const [author, setauthor] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
      const newBook = {
        title,
        author,
        id: Date.now()
      };
      dispatch(addBook(newBook))
      settitle("")
      naviagate("/")
  };
  return (
    <section>
      <h1 className="center-txt">Add Your books</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Enter your Book name"
          onChange={(e) => settitle(e.target.value)}
          value={title}
        />
        <input
          type="text"
          placeholder="Enter Book author"
          onChange={(e) => setauthor(e.target.value)}
          value={author}
        />
        <button onClick={handleSubmit}>Add Book</button>
      </div>
    </section>
  );
};

export default Add;
