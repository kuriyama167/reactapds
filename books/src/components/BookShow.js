import BookEdit from "./BookEdit";
import { useState } from "react";

function BookShow({book, onDelete}){

    const [showEdit, setShowEdit] = useState(false);

    const handleEditClick =()=>{
        setShowEdit(!showEdit);

    };

    let content = <h3>{book.title}</h3>;
    if(showEdit){
        content = <BookEdit book={book}/>;
    }

    const handleDeleteClick =()=>{
        onDelete(book.id);
    };
    
    return (
        <div className="book-show"> 
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