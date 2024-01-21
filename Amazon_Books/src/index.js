import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from './book';
import './style.css';
import books from './list';

function Bestsales(){
    return <section className="book-shelf">
    { /* Accessing item from the array of books using map*/ }
        {books.map((books)=>{
            {/*Passing complete list component as probs*/}
          return <Book book={books} key={books.id}/>
        })}
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