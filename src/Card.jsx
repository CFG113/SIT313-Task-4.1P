import React from "react";

const Card = (props) => {
  return (
    <div className="column">
      <img src={props.avatar} alt="staff" width="200" height="200" />
      <h3>{props.name}</h3>
      <p>{props.position}</p>
      <p>
        ⭐ 5{" "}
        <strong>
          {props.type === "article" ? "Author's name" : "username"}
        </strong>
      </p>
    </div>
  );
};

export default Card;
