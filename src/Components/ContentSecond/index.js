import React from "react";
import "./style.css";

import { Card } from "primereact/card";
import { Dialog } from "primereact/dialog";
import IMG from "../../assets/card-one.jpg";

const ContentSecond = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <div className="container-second" id="comunicacao">
      <Dialog visible={visible} onHide={setVisible} dismissableMask>
        <img src={IMG} style={{ width: "800px" }} />
      </Dialog>
      <div className="info-one">
        <div className="container-card z-50">
          <Card
            onClick={(event) => setVisible(true)}
            className="card-img-one"
          ></Card>
          <div className="text-slate-50" style={{maxHeight: '40vh', overflowY: 'scroll', scrollbarWidth: 'thin'}}>
            <h1 className="text-3xl font-semibold mb-2">
              <i className="icon-tooth fa-solid fa-comments" /> Comunicação
              Empresarial
            </h1>
            <p className="w-72 md:w-4/5 md:text-lg">
              Fluxo de comunicação: a Samsung possui uma comunicação abrangente
              que inclui comunicação vertical (para cima e para baixo),
              comunicação horizontal e comunicação informal. Ele permite que
              informações, sugestões e instruções se movam para cima e para
              baixo na hierarquia organizacional e incentiva a cooperação e o
              compartilhamento de informações entre os funcionários.
            </p>
            <br />
            <p className="good-reasons md:text-base w-5/6">
              Canais de comunicação interna: a Samsung utiliza diversos canais
              de comunicação interna para facilitar a comunicação entre os
              funcionários. Isso inclui e-mail corporativo, intranet, reuniões
              presenciais, videoconferências, quadros de avisos, boletins
              internos e plataformas de colaboração. Esses canais garantem a
              disseminação efetiva de informações, colaboração e troca de
              informações na organização. Canais de Comunicação Externos: A
              Samsung utiliza diversos canais de comunicação externos para se
              comunicar com clientes, fornecedores, investidores e o público em
              geral. Isso inclui sites oficiais, mídias sociais, campanhas
              publicitárias, eventos corporativos e relações com a imprensa.
              Esses canais permitem que uma empresa compartilhe informações
              sobre seus produtos, serviços, iniciativas de negócios e se
              comunique com seu público-alvo. Problemas atuais de comunicação:
              Os possíveis problemas de comunicação na Samsung incluem mensagens
              pouco claras, alinhamento departamental, idiomas e barreiras
              culturais em um contexto global e dificuldade em gerenciar grandes
              quantidades de dados.
            </p>
            <br />
            <p className="good-reasons md:text-base w-5/6">
              Soluções para problemas identificados: Para solucionar esses
              problemas, a Samsung pode implementar soluções como diretrizes
              claras de comunicação, promover uma cultura de comunicação aberta
              e transparente, investir em treinamento de comunicação eficaz,
              usar ferramentas técnicas para facilitar a colaboração e troca de
              informações e realizar avaliações regulares de serviço. eficácia
              da comunicação interna.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="info-two">
        <div className="container-card z-50">
          <Card className="card-img-one md:order-2"></Card>
          <div className="text-slate-50 grid md:justify-items-end md:text-end max-h-80">
            <h1 className="text-3xl font-semibold mb-2 flex items-center">
              <i className="icon-tooth fa-solid fa-tooth mx-1 md:order-2" />
              <span className="text-gray-500">Scanner 3D</span>
            </h1>
            <p className="w-72 text-gray-400 md:w-4/5 md:text-lg">
              O escaneamento 3D dos dentes (também chamado digitalização 3D) é o
              principal exame para que sejam feitos o planejamento do tratamento
              ortodôntico e confecção dos alinhadores transparentes.
            </p>
            <p className="good-reasons md:text-lg">
              <i className="icon-check fa-solid fa-check md:order-2" />
              <span className="text-gray-500"> Menor taxa de erros.</span>
            </p>
            <p className="good-reasons md:text-lg">
              <i className="icon-check fa-solid fa-check md:order-2" />
              <span className="text-gray-500 break-words">
                Imagens de qualidade superior <br /> e agilidade no processo.
              </span>
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ContentSecond;
