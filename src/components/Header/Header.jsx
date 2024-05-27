import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { NavLink, Link } from "react-router-dom";
import "./style.css";
import kyty from "./kyty.jpg";

export default function () {
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

  const toggleMenu = () => {
    const menu = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
  };

  return (
    <div>
      <header>
        {" "}
        <NavLink to="/" className="logo">
          Кутту<span>Бек</span>
        </NavLink>
        <ul className="navbar">
          <li>
            {" "}
            <NavLink to="/" className="active">
              БАШКЫ БЕТ
            </NavLink>
          </li>
          <li>
            <NavLink to="Projects">БИЗ ЖӨНҮНДӨ</NavLink>
          </li>
          <li>
            <Link to="Portfolio">СҮРӨТ</Link>
          </li>
          <li>
            <Link to="Text"></Link>
          </li>
          <li>
            <Link to="Photo"></Link>
          </li>
          <li>
            <NavLink to="Footer"></NavLink>
          </li>
        </ul>
        <div className="menu-btn" onClick={toggleMenu}>
          <span>INIRO</span>
          <div className="bx bx-menu" id="menu-icon"></div>
        </div>
      </header>

      <section className="home">
        <div className="home-text">
          <h2>Үй – бүлө өтө чоң байлык</h2>
          <p>
            Ал эми эң эле зарыл болгон <br />
            аманат – ал бизге берилген үй –бүлө. <br />
            Адам баласы калган макулуктардан айырмаланып, <br />
            эң биринчиден өмүрлүк жары жана жанынан артык көргөн <br />
            балдарынан түзүлгөн үй – бүлөнү чыңдоо зарыл.
          </p>
        </div>
        <div className="home-img">
          <img src={kyty} alt="Description" />
        </div>
      </section>
    </div>
  );
}
