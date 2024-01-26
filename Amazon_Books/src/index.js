import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from './Book';
import './style.css';
import {books} from './books';

const Booklist=()=>{
    
    const getbook=(id)=>{
      const book =  books.find((books)=>books.id===id);
      alert(`${book.title} by ${book.author}`)
    }
   return books.map((books)=>{
            {/*Using spread operator*/}
            return <Book {...books} key={books.id} getbook={getbook}/>
            });
}

function Bestsales(){
    return <section className="book-shelf">
    { /* Accessing item from the array of books using map*/ }
        <Booklist />
    </section>
}

function App(){
    return <>
    <h1>Amazon Best Selling Books</h1>
    <Bestsales />
    </>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>)