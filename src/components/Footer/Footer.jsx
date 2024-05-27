import React from "react";
import shuma from "./shuma.gif";
import "./style.css";

export default function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="left box">
          <div className="upper">
            <div className="topic">Автор</div>
            <p>
              Бир адамдын бир аз болсо дагы <br /> көңүлүн көтөрүш үчүн
              жасаган сайт.
            </p>
          </div>
          <div className="lower">
            <div className="topic">Биз менен байланышуу</div>
            <div className="phome">
              <a href="tel:+996 501 81 82 00">
                <i className="bx bx-phone-call"></i>+996 501 81 82 00
              </a>
            </div>
            <div className="email">
              <a href="mailto:">
                <i className="bx bx-envelope"></i>email
              </a>
            </div>
          </div>
        </div>
        <div className="middle box">
          <img src={shuma} />
        </div>
        <div className="right box">
          <div className="topic">Комментарий жаза кетиңиз</div>
          <form action="#">
            <input type="text" placeholder="Өз оюңузду калтырыңыз" />
            <button className="bo">Отправить</button>
            <div className="media-icons">
              <a href="https://www.google.ru/?hl=ru">
                <i className="bx bxl-google"></i>
              </a>
              <a href="https://www.youtube.com/">
                <i className="bx bxl-youtube"></i>
              </a>
              <a href="https://www.facebook.com/?locale=ru_RU">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="https://github.com/shumkarbek07">
                <i className="bx bxl-github"></i>
              </a>
            </div>
          </form>
        </div>
        <div className="botton">
          <p>
            <a href="#">&#169; 2024.</a>05.10
          </p>
        </div>
      </div>
    </footer>
  );
}
