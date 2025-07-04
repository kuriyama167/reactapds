import { createContext, useState, useCallback} from "react";
import axios from "axios";


const BooksContext = createContext();

function Provider({ children }) {

   const [books, setBooks] = useState([]);
    
  
    const fetchBooks = useCallback (async () => {
      const response = await axios.get("http://localhost:3001/books");
      setBooks(response.data);
    }, []);



 const editBookId = async (id, newTitle) => {
   const response =  await axios.put(`http://localhost:3001/books/${id}`, {
         title: newTitle, 
    } ); 

    console.log(response);



    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data};
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const handleCreateBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
   

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };


  const ValueToShare = {
    books,
    deleteBookById,
    editBookId,
    handleCreateBook,
    fetchBooks,
  };

  return <BooksContext.Provider value={{ValueToShare}}>{children}</BooksContext.Provider>;
}

export { Provider };
export default BooksContext;
