import BookShow from "./BookShow"

function BookList({books, onDelete}){

    const rederedBooks = books.map((book)=> {
 return <BookShow onDelete={onDelete} key={book.id} book={book}/>;
    });
    return <div className="book-list"> {rederedBooks}</div>;
}

export default BookList;