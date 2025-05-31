import { useState, useContext} from "react";
import BooksContext from "../context/book";



function BookCreate(){
    const [title, setTitles]= useState(" ");
    const {createBook} = useContext(BooksContext);

    const handleChange = (event)=> {
        setTitles(event.target.value);
       
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitles('');
 
    }
    return <div className="book-create"> 
    <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label>title</label>
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button">Creeate!</button>
        </form>
    </div>;
}

export default BookCreate;