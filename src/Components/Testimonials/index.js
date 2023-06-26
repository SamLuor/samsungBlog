import React from "react";
import "./style.css";

import CardTestimonial from "../CardTestimonial";

import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

const Testimonials = () => {
  const testimonialCards = [
    {
      photo: "perfil1.png",
      name: "Galaxy S24: vazamento revela que a Samsung não descontinuou o modelo 'Plus'",
      comment:
        "A Samsung planeja realizar em breve um evento Galaxy Unpacked para apresentar seus mais recentes smartphones dobráveis, o Galaxy Z Flip5 e o Z Fold5. Após esse lançamento, a empresa concentrará seus esforços no lançamento da série Galaxy S24. Recentemente, surgiram rumores de que a Samsung poderia reduzir o número de modelos e descontinuar o S24 Plus, porém, o site SamMobile obteve informações sobre os codinomes internos dos aparelhos, revelando que a fabricante lançará a linha com três dispositivos.",
      fonte:
        "https://mundoconectado.com.br/noticias/v/35491/galaxy-s24-vazamento-revela-que-a-samsung-nao-descontinuou-o-modelo-plus",
    },
    {
      photo: "perfil2.png",
      name: "Programa de autorreparo da Samsung para produtos Galaxy é ampliado, mas NÃO chega ao Brasil",
      comment:
        "Após estrear nos Estados Unidos e ser lançado na Coreia do Sul, a Samsung está expandindo o seu serviço de Auto-Reparo para a Europa. Essa expansão permitirá que os clientes adquiram componentes originais e realizem reparos em seus smartphones e notebooks Galaxy selecionados, tudo isso sem sair de casa. O serviço Samsung de Auto-Reparo agora está disponível para usuários em países como Alemanha, Bélgica, Espanha, França, Itália, Países Baixos, Polônia, Reino Unido e Suécia. No entanto, é lamentável que o Brasil e a América Latina não estejam incluídos nesta iniciativa da Samsung.",
      fonte:
        "https://multiversonoticias.com.br/programa-de-autorreparo-da-samsung-para-produtos-galaxy-e-ampliado-mas-nao-chega-ao-brasil/",
    },
    {
      photo: "perfil3.png",
      name: "Samsung lança nova Lava e Seca inteligente de 17kg",
      comment:
        "A Samsung acaba de introduzir a Lava e Seca Smart WD17T, um novo modelo com capacidade para lavar e secar grandes volumes de roupas. Disponível nas opções de cores branca e Inox, essa máquina foi projetada para simplificar o processo de lavagem, permitindo que todas as roupas sejam lavadas em um único ciclo, graças à sua capacidade de lavar até 17kg e secar até 10kg.",
      fonte:
        "https://mundoconectado.com.br/noticias/v/35489/samsung-lanca-nova-lava-e-seca-inteligente-de-17kg",
    },
    {
      photo: "perfil4.png",
      name: "Adoraria comprar um Galaxy Watch 6, mas não é o smartwatch para mim",
      comment:
        "De acordo com os rumores, estamos nos aproximando do lançamento do Galaxy Watch 6 em aproximadamente um mês. No entanto, também estamos prestes a testemunhar a apresentação da Samsung com um pouco de inveja, já que, mesmo tendo o desejo de adorar esse relógio, ele não é adequado para mim. Isso ocorre porque a Samsung continua restringindo alguns recursos do relógio exclusivamente para seus próprios smartphones, e como usuário de vários dispositivos (especificamente o Pixel), eu perderia várias funcionalidades essenciais se adquirisse esse relógio.",
      fonte:
        "https://teg6.com/115121/noticias/adoraria-comprar-um-galaxy-watch-6-mas-nao-e-o-smartwatch-para-mim/",
    },
  ];
  return (
    <section
      className="flex flex-col items-center container-testimonial mt-14"
      id="noticia"
    >
      {/* <Swiper>
      <CardTestimonial />
     </Swiper> */}
      <div className="testimonial-header">
        <h2>Noticias</h2>
        <br />
      </div>
      <Swiper
        centeredSlides
        spaceBetween={30}
        loop
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        slidesPerView="auto"
        modules={[Autoplay]}
        className="testimonialSwiper"
      >
        {testimonialCards.map((item) => (
          <SwiperSlide>
            <CardTestimonial
              key={item.name + item.photo}
              photo={item.photo}
              comment={item.comment}
              name={item.name}
              font={item.fonte}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
