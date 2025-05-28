import BookShow from "./BookShow"
import { useContext } from "react";
import BooksContext from "../context/book";


function BookList({books, onDelete , onEdit}){
      const {count, incrementCount} = useContext(BooksContext)


    const rederedBooks = books.map((book)=> {
 return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book}/>;
    });
    return <div className="book-list"> 
    {count}
    <button onClick={incrementCount}>Click</button>
    {rederedBooks}</div>;
}

export default BookList;