import React from "react";
import z1 from "./z1.jpg";
import z2 from "./z2.jpg";
import z3 from "./z3.jpg";
import z4 from "./z4.jpg";
import z5 from "./z5.jpg";
import z6 from "./z6.jpg";
import z7 from "./z7.jpg";
import z8 from "./z8.jpg";
import z10 from "./z10.jpg";
import "./style.css";

export default function () {
  return (
    <div>
      <h1 className="title-1">Жубайым жана Мен</h1>
      <div className="kizjurut">
        <img src={z1} />
        <img src={z7} />
        <img src={z3} />
        <img src={z5} />
        <img src={z6} />
        <img src={z2} />
        <img src={z8} />
        <img src={z4} />
        <img src={z10} />
      </div>
    </div>
  );
}
