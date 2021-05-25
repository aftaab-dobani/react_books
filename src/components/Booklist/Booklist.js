import React from 'react'; 
import Bookcard from '../Bookcard/Bookcard';
import "./style.css"

const Booklist = (props) => {
    return(
        <div className="list">
            {
                props.books.map((book, i) => {
                    return <Bookcard 
                            image={book.volumeinfo.imageLinks.thumbnail}
                            // title={}
                            // author={}
                            // description={}
                            // link={}
                        />
                })
            }

        </div>
    )
}

export default Booklist; 