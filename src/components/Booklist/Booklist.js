import React from 'react'; 
import "./style.css"

const Booklist = (props) => {
    return(
        <div className="list">
            {
                props.books.map((book, i) => {
                    return <Bookcard />
                })
            }

        </div>
    )
}

export default Booklist; 