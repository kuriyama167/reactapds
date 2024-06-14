import { useState } from "react";

function BookCreate({onCreate}){
    const [title, setTitles]= useState(" ");

    const handleChange = (event)=> {

    };
    return <div> 
        <form>
            <label>title</label>
            <input />
        </form>
    </div>;
}

export default BookCreate;