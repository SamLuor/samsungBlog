import React from "react";
import "./style.css";

import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import blankshield from "blankshield";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  // Send Email
  const sendEmail = (event) => {
    event.preventDefault();
    blankshield.open(
      `mailto:dentalimagem@outlook.com?subject=Trabalhe conosco&body=Olá, sou o(a) ${name}, ${message}`
    );
  };

  return (
    <section className="container-contact" id="contato">
      <form onSubmit={sendEmail} className="form">
        <div>
          <h2>Trabalhe conosco</h2>
          <p>Preencha os campos a baixo para entrarmos em contato</p>
        </div>
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
        <Button className="justify-self-center px-8 py-3 rounded-xl button-send-email">
          Enviar
        </Button>
      </form>
    </section>
  );
};

export default Contact;
