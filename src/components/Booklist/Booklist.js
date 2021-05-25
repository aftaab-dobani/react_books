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
            image={book.volumeinfo?.imageLinks.thumbnail}
            title={book.title}
            author={book.authors}
            
          />
        );
      })}
    </div>
  );
};

export default Booklist;
