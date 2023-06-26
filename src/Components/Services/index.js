import React from "react";
import "./style.css";

import IconScan from "../../assets/iconScan.png";
import { Card } from "primereact/card";
import { DeferredContent } from "primereact/deferredcontent";

const Services = () => {
  const showItem = React.useCallback((e) => {
    setTimeout(() => {
      e?.target.parentElement.parentElement.parentElement.classList.add(
        "active"
      );
    }, 500);
  }, []);

  return (
    <section className="grid place-items-center py-10" id="servicos">
      <h2 className="text-2xl font-medium text-gray-600">Serviços</h2>
      <div className="container-services">
        <DeferredContent  onLoad={showItem}>
          <Card
            className="card-hover"
            subTitle={<h2 className="text-lg font-medium">Scanner 3D</h2>}
            title={<img alt="IconScanner" className="w-20" src={IconScan} />}
          >
            <div>
              <p>
                Scanner 3D é uma tecnologia que faz scanneamento dos dentes e
                gengivas com precisão de quase 100%{" "}
              </p>
            </div>
          </Card>
        </DeferredContent>
        <DeferredContent onLoad={showItem}>
          <Card
            className="card-hover"
            subTitle={<h2 className="text-lg font-medium">Scanner 3D</h2>}
            title={<img alt="IconScanner" className="w-20" src={IconScan} />}
          >
            <div>
              <p>
                Scanner 3D é uma tecnologia que faz scanneamento dos dentes e
                gengivas com precisão de quase 100%{" "}
              </p>
            </div>
          </Card>
        </DeferredContent>
        <DeferredContent onLoad={showItem}>
          <Card
            className="card-hover"
            subTitle={<h2 className="text-lg font-medium">Scanner 3D</h2>}
            title={<img alt="IconScanner" className="w-20" src={IconScan} />}
          >
            <div>
              <p>
                Scanner 3D é uma tecnologia que faz scanneamento dos dentes e
                gengivas com precisão de quase 100%{" "}
              </p>
            </div>
          </Card>
        </DeferredContent>
      </div>
    </section>
  );
};

export default Services;
