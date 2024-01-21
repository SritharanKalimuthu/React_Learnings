import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from './book';
import './style.css';

const book ={
    title :"Atomic-Habits",
    author:"James Clear",
    img:'./image/atomichabits.jpg'
  }

const book2={
    title :"The Power of Your Subconsious Mind",
    author:" Joseph Murphy",
    img:'./image/subconsiousMind.jpg'
}
const book3={
    title :"Ikigai",
    author:" Francesc Miralles & Hector Garcia",
    img:'./image/ikigai.jpg'
}

function Bestsales(){
    return <div className="book-shelf">
    { /* Passing props to the <Book/> */ }
    <Book img={book.img} title={book.title} author={book.author}>out of stock</Book>
    <Book img={book2.img} title={book2.title} author={book2.author}/>
    <Book img={book3.img} title={book3.title} author={book3.author}/>
    </div>
}

function App(){
    return <>
    <h1>Amazon Best Selling Books</h1>
    <Bestsales />
    </>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>)