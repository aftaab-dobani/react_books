import React from 'react'; 
import "./style.css"

const Bookcard = (props) => {
    return(
        <div className="card-container">
            <img src={props.image} alt=""/>
            <div className="desc">
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
                
            </div>
            
        </div>
    )
}

export default Bookcard; 