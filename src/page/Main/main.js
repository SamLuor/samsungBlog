/* eslint-disable no-undef */
import React from "react";
import "./style.css";

import Header from "../../Components/Header";
import ContentOne from "../../Components/ContentOne";
import SidebarComp from "../../Components/Sidebar";
import Services from "../../Components/Services";
import ContentSecond from "../../Components/ContentSecond";
import About from "../../Components/About";
import OurClinic from "../../Components/OurClinic";
import Testimonials from "../../Components/Testimonials";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";
import ModalBudget from "../../Components/ModalBudget";

const Main = () => {
  const [visible, setVisible] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);

  const toggleSide = React.useCallback(() => {
    setVisible((e) => !e);
  }, []);

  // const handleScroll = React.useCallback(() => {
  //    const navbar = $(".nav-header")
  //    console.log(navbar["0"])
  //   //  if(navbar)
  //   //  navbar["0"].classList.add("active")
  // },[])

  return (
    <div>
      <Header toggleSide={toggleSide} />
      <div className="flex flex-col testando">
        <ContentOne setVisible={setModalVisible} />
        <About />
        <ContentSecond />
        {/* <Services /> */}
        {/* <OurClinic /> */}
        <Testimonials />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.98066279593!2d-59.944374335242784!3d-3.0997976477427627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1b4d8f437365%3A0xfb6f426bfddac985!2sSamsung%20Eletr%C3%B4nica%20da%20Amaz%C3%B4nia%20LTDA.!5e0!3m2!1spt-BR!2sbr!4v1687784893711!5m2!1spt-BR!2sbr"
          height="450"
          title="mapDentalImagem"
          style={{ border: "0" }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* <Contact /> */}
        <Footer />
      </div>
      <SidebarComp toggleSide={toggleSide} visible={visible} />
      <ModalBudget visible={modalVisible} setVisible={setModalVisible} />
    </div>
  );
};

export default Main;
