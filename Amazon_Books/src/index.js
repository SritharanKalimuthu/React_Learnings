import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from './book';
import './style.css';
import books from './list';

const Booklist=()=>{
   return books.map((books)=>{
            {/*Using spread operator*/}
            return <Book {...books} key={books.id}/>
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