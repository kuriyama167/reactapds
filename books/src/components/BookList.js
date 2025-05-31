import BookShow from "./BookShow"
import { useContext } from "react";
import BooksContext from "../context/book";


function BookList() {
  const { books} = useContext(BooksContext);

  const rederedBooks = books.map((book) => {
    return (
      <BookShow  key={book.id} book={book} />
    );
  });
  return <div className="book-list">{rederedBooks}</div>;
}

export default BookList;