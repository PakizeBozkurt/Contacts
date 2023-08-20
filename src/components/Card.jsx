import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card p-5 mb-5">
      <div className="sticky-top top ps-5 ">
        <p>{props.id}</p>
        <h2 className="name fs-3">{props.name}</h2>
        <Avatar className="" img={props.img} />
      </div>
      <div className="bottom">
        <Detail detailInfo={props.tel} />
        <Detail detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
