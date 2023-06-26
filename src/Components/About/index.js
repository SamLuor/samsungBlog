import React from "react";
import CardUs from "../CardUs";
import "./style.css";

const About = () => {
  const imgs = ["gallery1", "gallery2", "gallery3", "gallery4", "gallery5", "gallery6", "gallery7", "gallery8"];

  return (
    <section className="content-three" id="portfolio">
      <div className="header-content mt-14">
        <h2>Portfolio</h2>
        <p>
          A Samsung possui uma ampla gama de produtos e serviços inovadores que
          atendem às necessidades e demandas do mercado global. A empresa
          oferece uma ampla gama de eletrônicos, como smartphones, tablets,
          televisores, eletrodomésticos, equipamentos de áudio e vídeo e outros
          equipamentos técnicos.
        </p>
      </div>
      <div className="body-content">
        <h3>Diferenciais</h3>
        <p
          style={{ maxWidth: "40vw", minWidth: "340px" }}
          className="text-slate-700 mb-8"
        >
          Um dos principais diferenciais da Samsung é sua capacidade de combinar
          qualidade e inovação. A empresa investe constantemente em pesquisa e
          desenvolvimento de produtos para garantir que seus produtos estejam na
          vanguarda da tecnologia e ofereçam experiências excepcionais aos
          clientes. Além disso, a Samsung se diferencia por integrar vários
          dispositivos e soluções, proporcionando aos usuários uma experiência
          conectada e integrada.
        </p>
        <h3>Público-Alvo</h3>
        <p
          style={{ maxWidth: "40vw", minWidth: "340px" }}
          className="text-slate-700 mb-14"
        >
          A Samsung tem um público-alvo diversificado, desde consumidores
          domésticos a profissionais e empresas. Seus produtos e serviços são
          pensados ​​para atender às necessidades de diversos segmentos,
          oferecendo soluções customizadas e customizáveis. A empresa
          distingue-se também pela sua presença global, que atinge consumidores
          em todo o mundo e adapta-se às especificidades de cada mercado.
        </p>
        <div className="content-cards">
          {imgs.map((item) => (
            <CardUs key={item} url={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
