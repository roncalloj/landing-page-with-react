import React from "react";

export const Cards = (props) => {
    return(
        <div className ="card" style={{width: "100%"}}>
            <img src={props.img} className ="card-img-top"/>
            <div className ="card-body">
                <h5 className ="card-title">{props.title}</h5>
                <p className ="card-text">{props.text}</p>
                <a href="#" className ="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}