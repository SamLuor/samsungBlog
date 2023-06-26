import React from "react";
import { Sidebar } from "primereact/sidebar";
import "./style.css";

const SidebarComp = ({ visible, toggleSide }) => {
  return (
    <Sidebar
      visible={visible}
      onHide={toggleSide}
      position="right"
      showCloseIcon={false}
    >
      <div className="flex flex-col gap-4">
        <a href="#inicio">INICIO</a>
        <a href="#portfolio">PORTFOLIO</a>
        <a href="#comunicacao">COMUNICAÇÃO</a>
        <a href="#noticia">NOTICIA</a>
        <a href="#contato">CONTATO</a>
      </div>
    </Sidebar>
  );
};

export default SidebarComp;
