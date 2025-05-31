import { useState} from "react";
import useBooksContext from "../hooks/use-books-context";


function BookCreate(){
    const [title, setTitles]= useState(" ");
    const {createBook} = useBooksContext;

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