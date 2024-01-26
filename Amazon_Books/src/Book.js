
// props-properties rendered on <Book /> call.
// destructing on multiple ways.
// '{book:{img,title,author}}'

const Book = (props) => {
  const {img,title,author,stock,getbook,id} =props;
  // console.log(props)
  const getbookname=()=>{
    getbook(id);
  }
  return (
    <article className="book-column">
      <img src={img} alt="book"/>
      <p id="title">{title}</p>
      <p id="author">{author}</p>
      <p id="stockinfo">{stock}</p>
      {/* <button onClick={()=>{getbook(id)}}>click</button> */}
      <button onClick={getbookname}>click</button>
    </article>
  );
};



export default Book;
