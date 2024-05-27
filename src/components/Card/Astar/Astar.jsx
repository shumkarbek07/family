import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { NavLink } from "react-router-dom";
import "./style.css";
import j from "./j.jpg";

export default function Astar() {
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
    <div className="astar">
      <NavLink to="/" className="logo">
        Жыл<span>Дыз</span>
      </NavLink>
      <section className="home">
        <div className="home-text">
          <h2>Сатыбалдиева Жылдыз</h2>
          <p>
            Сатыбалдиева Жылдыз 1983-жылы 12-январда Талас облусунун Бакай-Ата
            районунун Миң -Булак айылында жарык дүйнөгө келген. Мектеп босогосун
            алгач 1990- жылы Досманбет Батырбашиев атындагы чалдыбар мектеп
            гимназиясында баштаган. 2000-жылы ушул эле мектепти аяктаган.
            2002-жылы 19 жаш курагында Курманов Куттубек менен баш кошуп, турмуш
            жолуна бирге аттанышкан. Жолдошу менен биргеликте 22 жыл жашап, бир
            уул эки кыздуу болушкан. Жолдошу менен биргеликте 2015-жылдан
            2018-жылга чейин Россия жергесинде эмгектенип келишкен. Учурда
            Ак-Дөбө айылында Үй -Бүлөлүк дарыгерлер тобунда медайым болуп
            эмгектенип, бейтаптарга, элдер үчүн кызмат кылып келет.
          </p>
        </div>
        <div className="home-img">
          <img src={j} alt="Description" />
        </div>
      </section>

      <div className="apa">
        <p>
          Күлчү АПА дүйнө жүзү нурдансын,
          <br /> Сени көрүп уяң тартып күн калсын.
          <br />
          Бейиш деген таманыңдын алдында,
          <br /> Пайгамбардын сөзүн айтчы, ким чансын.
          <br />
          <br />
          Күлчү АПА баары сага суктансын,
          <br /> Сулуулугуң адамзатты шыктантсын.
          <br /> Өзүн сулуу сезип жүргөн перилер,
          <br /> Сени көрүп арыздашып чыр салсын.
          <br />
          <br /> Күлчү АПА мен калайын кубанып,
          <br /> Күлкүң мага чексиз байлык гүлазык.
          <br /> Тагдыр салса оор сыноосун мойнума,
          <br /> Жеңем баарын күлгөнүңдөн күч алып.
        </p>
      </div>
    </div>
  );
}
