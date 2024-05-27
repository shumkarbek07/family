import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { NavLink } from "react-router-dom";
import "./style.css";
import as from "./as.jpg";

export default function Akjol() {
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
    <div className="akjol">
      <NavLink to="/" className="logo">
        Ак<span>Жол</span>
      </NavLink>
      <section className="home">
        <div className="home-text">
          <h2>Турдуманбетов Акжол Куттубекович</h2>
          <p>
            Турдуманбетов Акжол Куттубекович 2003-жылы Талас облусундагы
            Бакай-Ата районунун Ак-Дөбө айылында жарык дүйнөгө келген. Мектеп
            босогосун алгач 2010-жылы аттап, окуп билим алган. 2019-жылы ушул
            эле мектепти аяктаган. 2019-жылы Талас облусундагы
            <br /> Хоббиси Дзюдо.
          </p>
        </div>
        <div className="home-img">
          {" "}
          <img src={as} alt="Description" />
        </div>
      </section>
    </div>
  );
}
