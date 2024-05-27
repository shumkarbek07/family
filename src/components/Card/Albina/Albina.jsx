import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import { NavLink } from "react-router-dom";
import "./style.css";
import a from "./a.jpg";
import b from "./b.jpg";
import c from "./c.jpg";
import d from "./d.jpg";
import p from "./p.jpg";
import r from "./r.jpg";
import s from "./s.jpg";
import t from "./t.jpg";
import z from "./z.jpg";
import o from "./o.jpg";
import y from "./y.jpg";
import h from "./h.jpg";
import n from "./n.jpg";
import m from "./m.jpg";
import j from "./j.jpg";
import sh from "./sh.jpg";
import a0 from "./a0.jpg";
import a1 from "./a1.jpg";
import a2 from "./a2.jpg";
import a3 from "./a3.jpg";
import a4 from "./a4.jpg";
import q1 from "./q1.jpg";
import q2 from "./q2.jpg";
import q3 from "./q3.jpg";
import q4 from "./q4.jpg";
import q5 from "./q5.jpg";
import q6 from "./q6.jpg";
import q7 from "./q7.jpg";
import q8 from "./q8.jpg";
import q9 from "./q9.jpg";
import q10 from "./q10.jpg";
import q11 from "./q11.jpg";
import q12 from "./q12.jpg";
import q13 from "./q13.jpg";
import q14 from "./q14.jpg";
import q15 from "./q15.jpg";
import q16 from "./q16.jpg";
import q17 from "./q17.jpg";
import q18 from "./q18.jpg";
import q19 from "./q19.jpg";
import q20 from "./q20.jpg";
import q21 from "./q21.jpg";
import q22 from "./q22.jpg";
import q23 from "./q23.jpg";
import q24 from "./q24.jpg";
import q25 from "./q25.jpg";
import w1 from "./w1.jpg";
import w2 from "./w2.jpg";
import w3 from "./w3.jpg";
import w4 from "./w4.jpg";
import w5 from "./w5.jpg";
import w6 from "./w6.jpg";
import w7 from "./w7.jpg";
import w8 from "./w8.jpg";
import w9 from "./w9.jpg";
import w10 from "./w10.jpg";
import w11 from "./w11.jpg";
import w12 from "./w12.jpg";
import w13 from "./w3.jpg";
import w14 from "./w14.jpg";
import w15 from "./w15.jpg";
import w16 from "./w16.jpg";
import w17 from "./w17.jpg";
import w18 from "./w18.jpg";
import w19 from "./w19.jpg";
import w20 from "./w20.jpg";
import w21 from "./w21.jpg";
import w22 from "./w22.jpg";
import w23 from "./w23.jpg";
import w24 from "./w24.jpg";
import w25 from "./w25.jpg";
import e1 from "./e1.jpg";
import e2 from "./e2.jpg";
import e3 from "./e3.jpg";
import e4 from "./e4.jpg";
import e5 from "./e5.jpg";
import e6 from "./e6.jpg";
import e7 from "./e7.jpg";
import e8 from "./e8.jpg";
import e9 from "./e9.jpg";
import e11 from "./e11.jpg";
import e12 from "./e12.jpg";
import e13 from "./e13.jpg";
import e14 from "./e14.jpg";
import e15 from "./e15.jpg";
import e16 from "./e16.jpg";
import e18 from "./e18.jpg";
import e19 from "./e19.jpg";
import e20 from "./e20.jpg";

const Albina = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Добавляем showPassword

  const handleLogin = (e) => {
    e.preventDefault(); // Отменяем стандартное действие формы
    if (username === "shuma" && password === "2004") {
      window.location.href = "index.php";
    } else {
      setError("Неверный логин или пароль!");
    }
  };

  const togglePasswordVisibility = () => {
    // Определяем функцию для переключения видимости пароля
    setShowPassword(!showPassword);
  };

  const showHiddenPass = (inputPass, inputIcon) => {
    const input = document.getElementById(inputPass),
      iconEye = document.getElementById(inputIcon);

    iconEye.addEventListener("click", () => {
      if (input.type === "password") {
        input.type = "text";
        iconEye.classList.add("ri-eye-line");
        iconEye.classList.remove("ri-eye-off-line");
      } else {
        input.type = "password";
        iconEye.classList.remove("ri-eye-line");
        iconEye.classList.add("ri-eye-off-line");
      }
    });
  };

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
    <div className="albina">
      <NavLink to="/" className="logo">
        Аль<span>Бина</span>
      </NavLink>
      <section className="home">
        <div className="home-text">
          <h2>Турдуманбетова Альбина Куттубековна</h2>
          <p>
            Турдуманбетова Альбина Куттубековна <br />
            2005-жылы 07-октябрда Талас облусундагы <br />
            Бакай-Ата районунун Ак-Дөбө айылында жарык <br />
            дүйнөгө келген. Мектеп босогосун алгач 2012-жылы <br />
            аттап, окуп билим алган. 2021-жылы ушул эле <br />
            мектепти ийгиликтүү аяктаган. 2021-жылы <br />
            Бишкек шаарындагы Бишкекский Государственный <br />
            Университетке английский тилине тапшырган.
            <br /> Хоббиси Китеп окуу.
          </p>
        </div>
        <div className="home-img">
          <img src={a} alt="Description" />
        </div>
      </section>
      <div className="container">
        <div className="card">
          <img src={b} alt="" />
          <div className="head">Турдуманбетова Альбина</div>
        </div>
        <div className="card">
          <img src={c} alt="" />
          <div className="head">Турдуманбетова Альбина</div>
        </div>
        <div className="card">
          <img src={d} alt="" />
          <div className="head">Турдуманбетова Альбина</div>
        </div>
        <div className="card">
          <img src={p} alt="" />
          <div className="head">Турдуманбетова Альбина</div>
        </div>
        <div className="card">
          <img src={r} alt="" />
          <div className="head">Турдуманбетова Альбина</div>
        </div>
        <div className="card">
          <img src={s} alt="" />
          <div className="head">Турдуманбетова Альбина</div>
        </div>
        <div className="card">
          <img src={t} alt="" />
          <div className="head">Турдуманбетова Альбина</div>
        </div>
        <div className="card">
          <img src={z} alt="" />
          <div className="head">Турдуманбетова Альбина</div>
        </div>
        <div className="card">
          <img src={sh} alt="" />
          <div className="head">Турдуманбетова Альбина</div>
        </div>
        <div className="card">
          <img src={o} alt="" />
          <div className="head">Турдуманбетова Альбина</div>
        </div>
      </div>

      <div>
        <h1 className="title-1">18 Жаш</h1>
        <div className="aktep">
          <img src={a3} />
          <img src={a4} />
          <img src={a2} />
          <img src={a1} />
        </div>
        <p className="aas">
          - Пусть дела твои будут успешны, счастье безоблачным, события
          радостными, дни светлыми; пусть окружают только близкие и искренние
          люди! Желаю оставаться таким же жизнерадостным, ярким и прекрасным
          человеком! От всей души и со всей искренностью, поздравляю тебя с
          твоим восемнадцатилетием, с твоим совершеннолетием!
        </p>{" "}
        <br />
        <p className="aas">
          - Поздравляю с днем рождения, вот и сделан шаг в настоящую, взрослую
          жизнь, желаю, чтобы тебя охватывали только радостные чувства, в жизни
          были только яркие краски, а все начатые дела были завершены успехом!
        </p>
        <br />
        <p className="aas">
          - Я поздравляю тебя с долгожданным совершеннолетием и желаю быть в
          этой жизни достойным, уверенным, ответственным взрослым человеком!
          Покорения больших вершин тебе, достойных завоеваний и блестящего
          будущего!
        </p>
        <br />
        <p className="aas">
          - Поздравляю с совершеннолетием. Это такой классный возраст, когда еще
          ничего не поздно и уже все можно. Иди вперед с гордо поднятой головой.
          Все в твоих руках. Но не забывай иногда возвращаться к любящим тебя
          родителям.
        </p>
        <br />
        <p className="aas">
          - Ты вступаешь в прекрасный возраст, когда впереди ждут тебя чудесные
          моменты, новые впечатления и достижение поставленных целей. Люби, цени
          каждый миг, стремись к желаемому. Желаю верных друзей, приятных
          сюрпризов судьбы, семейного тепла.
        </p>
      </div>

      <div className="albina0">
        <img className="albina1" src={a0} />
        <p className="albina2">
          Когда мне была 5 лет, мама всегда твердила мне, что самое важное в
          жизни - быть счастливой. Когда я пошла в школу, меня спросили, кем я
          хочу стать, когда вырасту. Я написала "счастливой". Мне сказали - "ты
          не поняла задание", а я ответила - "вы не поняли жизнь".
        </p>
      </div>

      <div>
        <h1 className="title-1">Бүгүнкү сүрөт эртеңки тарых</h1>
        <div className="albinashumkar">
          <img src={h} />
          <img src={n} />
          <img src={m} />
          <img src={j} />
          <img src={q1} />
          <img src={q2} />
          <img src={q3} />
          <img src={q4} />
          <img src={q5} />
          <img src={q6} />
          <img src={q7} />
          <img src={q8} />
          <img src={q9} />
          <img src={q10} />
          <img src={q11} />
          <img src={q12} />
          <img src={q13} />
          <img src={q14} />
          <img src={q15} />
          <img src={q16} />
          <img src={q17} />
          <img src={q18} />
          <img src={q19} />
          <img src={q20} />
          <img src={q21} />
          <img src={q22} />
          <img src={q23} />
          <img src={q24} />
          <img src={q25} />
          <img src={w1} />
          <img src={w2} />
          <img src={w3} />
          <img src={w4} />
          <img src={w5} />
          <img src={w6} />
          <img src={w7} />
          <img src={w8} />
          <img src={w9} />
          <img src={w10} />
          <img src={w11} />
          <img src={w12} />
          <img src={w13} />
          <img src={w14} />
          <img src={w15} />
          <img src={w16} />
          <img src={w17} />
          <img src={w18} />
          <img src={w19} />
          <img src={w20} />
          <img src={w21} />
          <img src={w22} />
          <img src={w23} />
          <img src={w24} />
          <img src={w25} />
          <img src={e1} />
          <img src={e2} />
          <img src={e3} />
          <img src={e4} />
          <img src={e5} />
          <img src={e6} />
          <img src={e7} />
          <img src={e8} />
          <img src={e9} />
          <img src={e11} />
          <img src={e12} />
          <img src={e13} />
          <img src={e14} />
          <img src={e15} />
          <img src={e16} />
          <img src={e18} />
          <img src={e19} />
          <img src={e20} />
        </div>
      </div>

      <div>
        {" "}
        <h1 className="title-1">Жеке маалыматтар</h1>
        <div className="custom-container">
          <div className="custom-login-content">
            <img src={y} alt="login image" className="custom-login-img" />
            <form onSubmit={handleLogin} className="custom-login-form">
              <div>
                <div className="custom-login-inputs">
                  <div>
                    <label
                      htmlFor="custom-input-email"
                      className="custom-login-label"
                    >
                      Логин
                    </label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) =>
                        setUsername(e.target.value.toLowerCase())
                      }
                      required
                      className="custom-login-input"
                      id="custom-input-email"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="custom-input-pass"
                      className="custom-login-label"
                    >
                      Пароль
                    </label>
                    <div className="custom-login-box">
                      <input
                        onChange={(e) =>
                          setPassword(e.target.value.toLowerCase())
                        }
                        type={showPassword ? "text" : "password"}
                        required
                        className="custom-login-input"
                        id="custom-input-pass"
                        value={password}
                      />
                      <i
                        className={`ri ${
                          showPassword ? "ri-eye-line" : "ri-eye-off-line"
                        } custom-login-eye`}
                        onClick={togglePasswordVisibility}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="custom-login-buttons">
                  <button
                    onClick={handleLogin}
                    type="submit"
                    className="custom-login-button"
                  >
                    Вход
                  </button>
                  {error && <p className="error-message">{error}</p>}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Albina;
