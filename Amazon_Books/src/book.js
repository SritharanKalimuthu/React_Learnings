
// props-properties rendered on <Book /> call.
const Book = (props) => {
  const {img,title,author,children} =props;  // Destructing.
  return (
    <article className="book-column">
      <img src={img} alt="book"/>
      <p id="title">{title}</p>
      <p id="author">{author}</p>
      {/* children elements are passed by children from props , by which we can assign certain elements to specified component.*/}
      <p id="stock">{children}</p>
    </article>
  );
};



export default Book;
