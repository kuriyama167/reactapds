import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App (){

    const [books, setBooks]=useState([]); 
    const handleCreateBook = (title)=> {
       const updatedBooks=[
        ...books, 
        {
            id:Math.round(Math.random()*9999), 
            title:title
        }
        ];
        setBooks(updatedBooks);

    };

    return <div>
        <BookList/>    
        <BookCreate onCreate={handleCreateBook}/>
    </div>;
}

export default App;