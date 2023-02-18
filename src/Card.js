import React from "react";
import "./Card.css";
import Rating from "material-ui-rating";

// imgsrc, name, rating
const Card = (props) => {
  return (
    <div className="carBox">
      <div className="carimg">
        <img src={props.imgsrc} alt="Pic" className="net_img" />
      </div>
      <div className="car_name">{props.carname}</div>
      <div className="rating_of_car">
        <Rating name="read-only" value={props.value} size="large" readonly />
      </div>
    </div>
  );
};

export default Card;
