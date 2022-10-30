import React from "react";

const Card = ({title,buttontext,paragraph}) => {
  return(
    <div className="card" style={{width:"18rem"}}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {paragraph}
        </p>
        <a href="#" className="btn btn-success">{buttontext}</a>
      </div>
    </div>
  )
}
export default Card;