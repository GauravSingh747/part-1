// import React from "react";
import ExpDate from "./ExpDate";
import "./ExpItem.css";
import Card from "./Card";

function ExpItem(props) {
  return (
    <Card className="expense-item">
      <ExpDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpItem;
