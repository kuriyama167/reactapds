import BookEdit from "./BookEdit";
import { useState, useContext } from "react";
import BooksContext from "../context/book";

function BookShow({book}){
    const [showEdit, setShowEdit] = useState(false);
    const {deleBookById} = useContext(BooksContext);

    const handleDeleteClick =()=>{
        deleBookById(book.id);
    };
    const handleEditClick=()=>{
        setShowEdit(!showEdit);

    };

    
    const handleSubmit =()=>{
        setShowEdit(false);
      

    };

    let content = <h3>{book.title}</h3>;
    if(showEdit){
        content = <BookEdit onSubmit={handleSubmit} book={book}/>;
    }

 
    
    return (
        <div className="book-show"> 
        <img
        alt="books"
        src={`https://picsum.photos/seed/${book.id}/300/200`}
        />
    <div>{content}</div>
    <div className="actions">
        <button className="edit" onClick={handleEditClick}>
            edit

        </button>
        <button className="delete" onClick={handleDeleteClick}>
            Delete
        </button>
    </div>
    </div>
    );
    
}

export default BookShow;