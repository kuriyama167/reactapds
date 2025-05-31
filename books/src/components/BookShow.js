import BookEdit from "./BookEdit";
import { useState} from "react";
import useBooksContext from "../hooks/use-books-context";

function BookShow({book}){
    const [showEdit, setShowEdit] = useState(false);
    const {deleBookById} = useBooksContext;

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