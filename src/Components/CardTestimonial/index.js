import React from "react";
import "./style.css";

import { Avatar } from "primereact/avatar";

const CardTestimonial = ({ photo, name, comment, font }) => {
  return (
    <div className="card-testimonial">
      <div className="grid justify-items-center">
        {/* <Avatar
          shape="circle"
          size="xlarge"
          image={require(`../../assets/${photo}`)}
          imageAlt="testimonial"
        /> */}
        <img src={require(`../../assets/${photo}`)} alt="" srcset="" style={{width: '250px', borderRadius: '50px'}}/>
        <h4 className="font-bold">{name}</h4>
      </div>
      {/* <img
        className="star"
        src={require("../../assets/Stars.webp")}
        alt="star"
      /> */}
      <p style={{maxHeight: '200px', overflowY: 'scroll', scrollbarWidth: 'thin'}}>{comment}</p>
      <p>Fonte: {font}</p>
    </div>
  );
};

export default CardTestimonial;
