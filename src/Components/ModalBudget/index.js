import React from "react";
import "./style.css";

import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import blankshield from "blankshield";

const ModalBudget = ({ visible, setVisible }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const sendEmail = (event) => {
    event.preventDefault();
    blankshield.open(
      `mailto:dentalimagem@outlook.com?subject=Orçamento&body=Olá, sou o(a) ${name}, ${message}`
    );
  };

  return (
    <Dialog
      draggable={false}
      header={<h6 className="text-xl text-zinc-600">Solicitar Orçamento</h6>}
      icons={
        <i
          className="fa-solid fa-close icon-close"
          onClick={() => setVisible(false)}
        />
      }
      className="modal-budget"
      visible={visible}
      onHide={setVisible}
      style={{ width: "80vw", minWidth: "340px", maxWidth: "500px" }}
    >
      <form className="form mt-5" onSubmit={sendEmail}>
        <div className="grid gap-8">
          <span className="p-float-label">
            <InputText
              id="name"
              name="name"
              value={name}
              className="w-full"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="name">Nome</label>
          </span>
          <span className="p-float-label">
            <InputText
              id="email"
              name="email"
              type="email"
              value={email}
              className="w-full"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
          </span>
          <span className="p-float-label">
            <InputTextarea
              id="message"
              name="description"
              value={message}
              className="w-full h-32 resize-none"
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message">Mensagem</label>
          </span>
        </div>
        <Button className="justify-self-center px-8 py-3 rounded-xl">
          Enviar
        </Button>
      </form>
    </Dialog>
  );
};

export default ModalBudget;
