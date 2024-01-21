
// props-properties rendered on <Book /> call.
// destructing on multiple ways.
const Book = ({book:{img,title,author}}) => {
  // const {img,title,author} =props.book;
  return (
    <article className="book-column">
      <img src={img} alt="book"/>
      <p id="title">{title}</p>
      <p id="author">{author}</p>
    </article>
  );
};



export default Book;
