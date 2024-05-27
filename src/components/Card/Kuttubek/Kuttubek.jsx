import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { NavLink } from "react-router-dom";
import "./style.css";
import k from "./k.jpg";
import t from "./t.jpg";
import q from "./q.jpg";
import w from "./w.jpg";
import u from "./u.jpg";
import y from "./y.jpg";
import ch from "./ch.jpg";
import bu from "./bu.jpg";
import j from "./j.jpg";
import z from "./z.jpg";
import as from "./as.jpg";
import fg from "./fg.jpg";

export default function Kuttubek() {
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
    <div className="kuttubek">
      <NavLink to="/" className="logo">
        Кутту<span>Бек</span>
      </NavLink>
      <section className="home">
        <div className="home-text">
          <h2>Курманоа Куттубек Турдуманбетович</h2>
          <p>
            Курманов Куттубек 1981-жылы 9-июлда Талас облусундагы Бакай-Ата
            районунун Ак-Дөбө айылында жарык дүйнөгө келген. Мектеп босогосун
            алгач 1988-жылы аттап, Орловка мектебинде окуп билим алган.
            1998-жылы ушул эле мектепти аяктаган. 2002-жылы жубайы Сатыбалдиева
            Жылдыз экөө баш кошуп турмуш жолуна бирге аттанышкан. Учурда бир
            уул, 2 кыздын сүйүктүү атасы. Россия жергесинде 3 жыл 2015-жалдан
            2018-жылга чейин эмгектенип келген. 2018-жылдан баштап айдоочулук
            менен алектенип, Бишкек -Талас жолунда жүргүнчүлөрдү ташып, элине
            кызмат кылып келет.
          </p>
        </div>
        <div className="home-img">
          <img src={q} alt="Description" />
        </div>
      </section>

      <div className="container">
        <div className="card">
          <img src={k} alt="" />
          <div className="head">Курманоа Куттубек</div>
        </div>
        <div className="card">
          <img src={u} alt="" />
          <div className="head">Курманоа Куттубек</div>
        </div>
        <div className="card">
          <img src={w} alt="" />
          <div className="head">Курманоа Куттубек</div>
        </div>
        <div className="card">
          <img src={t} alt="" />
          <div className="head">Курманоа Куттубек</div>
        </div>
        <div className="card">
          <img src={y} alt="" />
          <div className="head">Курманоа Куттубек</div>
        </div>
        <div className="card">
          <img src={as} alt="" />
          <div className="head">Курманоа Куттубек</div>
        </div>
        <div className="card">
          <img src={fg} alt="" />
          <div className="head">Курманоа Куттубек</div>
        </div>
      </div>

      <div>
        <h1 className="title-1">Аттын мааниси</h1> <br />
        <p className="aas">
          Куттубек деген ысымга боорукердик, сезимталдык, кыйын учурда жардамга
          келүү сыяктуу сапаттар өзгөчөлөнөт. Куттубек өзүнүн талантын
          адекваттуу акыл-насаат айтып, адеп-ахлаксыз, анын аркасында
          дос-туугандардын көбүн чечүүгө үлгүрүп, камкордук, жоопкерчиликтүү
          мамиле жасоо менен ийгиликтүү иштеп келет. Башкалардын да өз ой-пикири
          жана өзүнүн уникалдуу жолуна түшүү мүмкүнчүлүгү бар. Куттубек аттуу
          адамдар башкалар менен жакшы тил табышып, балдар менен тил табышып,
          боорукер, назик тарбиячылар. <br />
          Аттын мааниси келип чыгышы Куттубек аты түрк тектүү болуп, эки
          бөлүктөн турат: “кут” – “бакыт” же “ийгилик”, “убек” – “башчы” же
          “башчы” дегенди билдирет. Ошентип, Куттубекти «бакыт лидери» же
          «ийгиликтин лидери» деп которсо болот. <br />
          Тарыхта Куттубек Орто Азия элдеринде, анын ичинде казактарда,
          кыргыздарда, өзбектерде кеңири таралган. Бул ысым көбүнчө лидерлик
          сапаттарын көрсөткөн, мүнөзү күчтүү адамдарга ыйгарылган. <br />
          Куттубек – намыскөй, кайраттуу угулат. Ал түркчө келип, «башкы баатыр»
          деп которулат. Куттубек деген ысым Орто Азияда кеңири таралган, ал
          жерде күчтүн жана кайраттуулуктун символуна айланган. <br />
          Динде Куттубек өзгөчө мааниге ээ болгон ысым. Ал «бакты» же «ийгилик»
          дегенди билдирген «кут» түшүнүгү менен байланышкан. Куттубек —
          шакирттерине бакыт, ырыскы тартуулаган адам.
        </p>{" "}
        <br />
        <h1 className="title-1">Аттагы тамгалардын мааниси</h1> <br />
        <p className="aas">
          К – объективдүүлүктүн жана калыстыктын, туруктуулуктун, туруктуулуктун
          жана тартиптин символу. Куттубек өнүккөн интуиция, өжөрлүк жана
          өжөрлүк, кайталангыс аткаруучулук сыяктуу сапаттары менен айырмаланат.
          <br />У - өзүн-өзү кармай билүү, токтоолук, чыдамкайлык, көйгөйлүү
          кырдаалдарды изилдөө жана талдоо жана андан чыгуунун оптималдуу жолун
          табуу жөндөмүн билдирет. Куттубек дагы чыгармачыл, ар тараптуу,
          башкаларга боорукер, жардамга келе алган инсан.
          <br />Т – акылга сыярлык компромисске барууга, башка адамдардын
          позициясын түшүнүүгө жана кабыл алууга жөндөмдүү, кыраакы, адекваттуу
          адамдын белгиси. Куттубек таланттуу инсан, эмоционалдуу жана
          чыгармачыл, адилетсиздиктин ар кандай көрүнүштөрүнө каршы айыгышкан
          күрөшчү. <br />Б - тең салмактуулукта жана гармонияда, ал эми өзүнүн
          аялуу жана романтик мүнөзүнө карабастан, Куттубек жигердүү жана
          демилгелүүлүгү менен айырмаланат, көйгөйлөрдү жана пайда болгон
          маселелерди оңой чечет, айланасындагы адамдар менен болгон мамиледе
          туруктуулугу, берилгендиги жана ишенимдүүлүгү менен айырмаланат.
          <br />E - күчтүү аналитикалык акыл-эс, кызыгуу, жашоонун жана
          адамдардын ортосундагы мамилелердин ар кандай аспектилерин изилдөөгө
          кылдаттык билдирет. Куттубек өзүнүн активдүүлүгү, демилгелүүлүгү,
          чечкиндүүлүгү менен айырмаланат, ал ар кандай татаал кырдаалдарда
          чечим таап, мамилелердин одоно кырларын жылмалай алат.
        </p>
      </div>
      <br />
      <h1 className="title-1">Aтактуулар менен бир элес</h1>
      <div className="aktep">
        <img src={ch} />
        <img src={j} />
        <img src={bu} />
        <img src={z} />
      </div>
    </div>
  );
}
