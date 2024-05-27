import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { NavLink } from "react-router-dom";
import "./style.css";
import s from "./s.jpg";
import c from "./c.jpg";
import e from "./e.jpg";
import r from "./r.jpg";
import m from "./m.jpg";

export default function Asema() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "40px",
      duration: 2500,
      reset: true,
    });

    sr.reveal(".logo", { delay: 200, origin: "left" });
    sr.reveal(".menu-btn", { delay: 520, origin: "right" });
    sr.reveal(".home-text span", { delay: 600, origin: "top" });
    sr.reveal(".home-text h1", { delay: 680, origin: "left" });
    sr.reveal(".home-text p", { delay: 750, origin: "right" });
    sr.reveal(".main-btn", { delay: 860, origin: "left" });
    sr.reveal(".share p", { delay: 950, origin: "bottom" });
    sr.reveal(".social", { delay: 950, origin: "right" });
    sr.reveal(".home-img", { delay: 1000, origin: "right" });
  }, []);
  return (
    <div className="asema">
      <NavLink to="/" className="logo">
        Асе<span>Ма</span>
      </NavLink>
      <section className="home">
        <div className="home-text">
          <h2>Турдуманбетова Асема Куттубековна</h2>
          <p>
            Турдуманбетова Асема Куттубековна 2009-жылы Талас облусундагы
            Бакай-Ата районунун Ак-Дөбө айылында жарык дүйнөгө келген. Мектеп
            босогосун алгач 2016-жылы аттап, окуп билим алганып жатат.
            <br /> Хоббиси Баскетбол.
          </p>
        </div>
        <div className="home-img">
          <img src={s} alt="Description" />
        </div>
      </section>

      <div className="aktep">
        <img src={c} />
        <img src={e} />
        <img src={m} />
        <img src={r} />
      </div>
    </div>
  );
}
