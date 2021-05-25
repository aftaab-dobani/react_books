import React from "react";
import Bookcard from "../Bookcard/Bookcard";
import "./style.css";

const Booklist = (props) => {
  return (
    <div className="list">
      {props.books.map((book, i) => {
        return (
          <Bookcard
            key={i}
            image={book.volumeInfo?.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors?.join(",")}
            description={book.volumeInfo.description}
            link={book.volumeInfo.infoLink}
            
          />
        );
      })}
    </div>
  );
};

export default Booklist;
