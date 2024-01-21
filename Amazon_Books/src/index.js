import React from 'react';
import ReactDOM from 'react-dom/client';
// import Book from './book';
import './style.css';

// Creating array of booklist.
const books =[
        {
        title :"Atomic-Habits",
        author:"James Clear",
        img:'./image/atomichabits.jpg'
    },
    {
        title :"The Power of Your Subconsious Mind",
        author:" Joseph Murphy",
        img:'./image/subconsiousMind.jpg'
    },
    {
        title :"Ikigai",
        author:" Francesc Miralles & Hector Garcia",
        img:'./image/ikigai.jpg'
    }
];

function Bestsales(){
    return <section className="book-shelf">
    { /* Accessing item from the array of books using map*/ }
        {books.map((books)=>{
          return <div className='book-column'><img src={books.img} alt='book'/>
          <p id='title'>{books.title}</p>
          <p id='author'>{books.author}</p></div>
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