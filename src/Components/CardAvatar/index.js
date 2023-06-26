import React from "react";
import "./style.css"

const CardAvatar = ({ name, office, url }) => {
  return (
    <div className="card-avatar">
      <img src={require(`../../assets/${url}`)} alt={`${name} ${office} `} />
      <div className="info-box">
        <h6>{name}</h6>
        <p>{office}</p>
      </div>
    </div>
  );
};

export default CardAvatar;
