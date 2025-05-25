import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BookShow from "./components/BookShow";
import axios from "axios";

function App (){

    const [books, setBooks]=useState([]); 

   
     const editBookId=(id, newTitle) => {
        const updatedBooks = books.map((book)=>{
             if(book.id === id){
                return {...book, title:newTitle};
             }
             return book;
        });
        setBooks(updatedBooks);
     }

    const deleteBookById=(id)=>{
        const updatedBooks=books.filter((book)=>{
            return book.id!==id;
        });
        setBooks(updatedBooks);

    };



    const handleCreateBook = async (title) => {
      const response = await axios.post("http://localhost:3000/books", {
        title
      });
      console.log(response); 

      // const updatedBooks=[
      //   ...books,
      //   {
      //      id:Math.round(Math.random()*9999),
      ////       title:title
      //   }
      //  ];
      // setBooks(updatedBooks);
    };

    return (
        <div className="app">
            <h1>Reading List</h1>
        <BookList onEdit={editBookId} books={books} onDelete={deleteBookById} />    
        <BookCreate onCreate={handleCreateBook}/>
    </div>
    );
        
}

export default App;