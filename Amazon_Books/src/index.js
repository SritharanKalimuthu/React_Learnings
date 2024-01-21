import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from './book';
import './style.css';
import books from './list';

function Bestsales(){
    return <section className="book-shelf">
    { /* Accessing item from the array of books using map*/ }
        {books.map((books)=>{
            const {img,title,author}=books;
            {/*Passing destructed map items to the book component as props*/}
          return <Book img={img} title={title} author={author}/>
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