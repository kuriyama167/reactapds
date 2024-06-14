import { useState } from "react";

function BookCreate({onCreate}){
    const [title, setTitles]= useState(" ");

    const handleChange = (event)=> {
        setTitles(event.target.value);
       
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
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