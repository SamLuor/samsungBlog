import React from "react";
import "./style.css";

import { Button } from "primereact/button";

const ContentOne = ({ setVisible }) => {
  return (
    <main className="content-one" id="inicio">
      <div className="grid gap-2">
        <h3 className="text-3xl lg:text-5xl font-semibold text-white">
          Nossa história
        </h3>
        <br />
        <p className="pr-16 text-gray-200 md:text-xl font-medium" style={{backgroundColor:'rgba(0,0,0,0.7)', borderRadius: '15px', maxHeight: '80vh', overflowY: 'scroll', scrollbarWidth: 'thin'}}>
          A história da Samsung tem sido de sucesso e inovação desde a sua
          criação. Fundada por Lee Byung-chul em 1938 em Taegu, Coréia do Sul, a
          empresa começou como uma pequena loja de exportação agrícola. Ao longo
          dos anos, a Samsung expandiu suas atividades, por exemplo, nas áreas
          de eletrônica, construção, finanças e tecnologia da informação. A
          missão da Samsung sempre foi "inspirar o mundo com inovação e ideias
          transformadoras". A sua visão é ser líder global em diversas áreas de
          negócio e proporcionar valor acrescentado e satisfação aos seus
          clientes. Seus valores fundamentais são excelência, integridade,
          pessoas e mudança. Desde a sua criação, a Samsung passou por um
          processo contínuo de expansão. No início da atividade, os sócios eram
          modestos. Mas, graças ao crescimento explosivo ao longo dos anos, a
          empresa tornou-se um dos maiores empregadores do mundo. Atualmente, a
          Samsung emprega milhares de pessoas em diversos países, promovendo o
          desenvolvimento econômico e social. Uma das marcas registradas da
          Samsung é sua busca incansável pela inovação. A empresa investe
          pesadamente em pesquisa e desenvolvimento de produtos para fornecer
          produtos e serviços de qualidade. Além disso, a Samsung possui uma
          cultura corporativa que valoriza a criatividade, o trabalho em equipe
          e o empreendedorismo. Ao longo de sua história, a Samsung se destacou
          no mercado global ao apresentar produtos icônicos e revolucionários. A
          empresa foi pioneira em muitos campos, desde os primeiros estágios da
          indústria eletrônica com rádios e televisores até os mais recentes
          avanços tecnológicos, como smartphones, tablets e dispositivos móveis.
          Na foto abaixo estão os fundadores da Samsung, Lee Byung-chul e Lee
          Kun-hee, que lideraram a empresa em diferentes momentos de sua
          história.
        </p>
      </div>
    </main>
  );
};

export default ContentOne;
