import React from "react";
import Card from "./Card";

const CardSection = () => {
  return(
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
          <div className="col-4">
            <div className="card" style={{width:"18rem"}}>
              <img
                src="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="card-img-top"
                alt="..." />
                <Card title="Learn Code" paragraph="LET'S Have Learn coding with me in javascript" buttontext="CLICK CODE" />
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={{width:"18rem"}}>
              <img
                src="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="card-img-top"
                alt="..." />
                <Card title="buy books" paragraph="We are DEAling with ALl types of books Selling Online" buttontext="See Books"  />
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={{width:"18rem"}}>
              <img
                src="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="card-img-top"
                alt="..."
              />
             <Card title="book Ticket" paragraph="Plz Welcome to our Ticket booking Portal " buttontext="check Places" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CardSection;