import BookShow from "./BookShow"

function BookList({books}){

    const rederedBooks = books.map((book)=> {
 return <BookShow key={book.id} book={book}/>;
    });
    return <div className="book-list"> {rederedBooks}</div>;
}

export default BookList;