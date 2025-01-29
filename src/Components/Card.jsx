import React from "react"
import "./Card.css"

function Card({children,addClass,id})
{
    return (
        <div className={"card "+addClass} id={id}>
            {children}
      </div>
    )
}


export default Card