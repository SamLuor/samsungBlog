import React from "react";
import "./style.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.css";
import "swiper/css/effect-coverflow";

import { EffectCoverflow, Pagination } from "swiper";

import CardAvatar from "../CardAvatar";

const OurClinic = () => {
  const cardsInfo = [
    { name: "Dra. Nathália", office: "Sócia diretora", url: "avatar1.jpg" },
    {
      name: "Dr. Zósimo",
      office: "Sócio diretor e Radiologista",
      url: "avatar2.jpg",
    },
    { name: "Mirele", office: "Recepcionista", url: "avatar3.jpg" },
    { name: "Karine", office: "Recepcionista", url: "avatar4.jpg" },
    { name: "Sandy", office: "Auxiliar de Escritório", url: "avatar5.jpg" },
    {
      name: "Silvana",
      office: "Auxiliar de Serviços Gerais",
      url: "avatar6.jpg",
    },
    { name: "Edson", office: "Técnico", url: "avatar7.jpg" },
    { name: "Magda", office: "Técnica", url: "avatar8.jpg" },
  ];

  return (
    <section>
      <div className="container-our-clinic">
        <h2>Nossa equipe</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          scelerisque porttitor leo. Duis finibus quis ipsum sit amet
          vestibulum.
        </p>
      </div>
      <div className="mt-8">
        <Swiper
          effect={"coverflow"}
          grabCursor
          centeredSlides={true}
          loop
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 2.5,
            slideShadows: 0,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="swiper_container"
        >
          {cardsInfo.map((item) => {
            return (
              <SwiperSlide key={item.name + item.url}>
                <CardAvatar
                  url={item.url}
                  name={item.name}
                  office={item.office}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default OurClinic;
