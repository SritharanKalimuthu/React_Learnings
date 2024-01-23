
// props-properties rendered on <Book /> call.
// destructing on multiple ways.
// '{book:{img,title,author}}'

const Book = (probs) => {
  const {img,title,author,stock} =probs;
  return (
    <article className="book-column">
      <img src={img} alt="book"/>
      <p id="title">{title}</p>
      <p id="author">{author}</p>
      <p id="stockinfo">{stock}</p>
    </article>
  );
};



export default Book;
