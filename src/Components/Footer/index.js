/* eslint-disable no-undef */
import React from "react";
import "./style.css";

import blankshield from "blankshield";
import LOGO from "../../assets/logo.png";

const Footer = () => {
  //Security _blank open in other window - (blankshield, jquery)
  $("body").on("click", "a[target=_blank]", function (event) {
    var href = $(this).attr("href");
    blankshield.open(href);
    event.preventDefault();
  });

  return (
    <footer style={{ backgroundColor: "black" }} className="px-8 py-8" id="contato">
      <div className="container-footer pb-28 md:pb-28">
        <div>
          <img src={LOGO} alt="dentalimagem" className="w-44" />
        </div>
        <div className="grid contato h-32 gap-2 mt-0 text-left">
          <h6 className="mb-4">Contato</h6>
          <span className="flex gap-2">
            <i className="fa-regular fa-envelope text-white text-xl" />
            <a href="https://samsung-webform.sprinklr.com/?token=eyJhbGciOiJSUzI1NiJ9.eyJmb3JtSWQiOiI2MjBiNjZkMGM0ZTFkNjYwZWI4YmUzODQiLCJzdWIiOiJBY2Nlc3MgVG9rZW4gR2VuZXJhdGVkIEJ5IFNwcmlua2xyIiwiY2xpZW50SWQiOjExNjkyLCJpc3MiOiJTUFJJTktMUiIsInR5cCI6IkpXVCIsInVzZXJJZCI6MCwiYWNjb3VudElkIjoxMDY5NTQ5LCJhdWQiOlsiU1BSSU5LTFIiXSwibmJmIjoxNjQ0OTIyOTg2LCJzY29wZSI6WyJSRUFEIiwiV1JJVEUiXSwicGFydG5lcklkIjoxMjQsImF1dGhUeXBlIjoiU1BSX0tFWV9QQVNTX0xPR0lOIiwidG9rZW5UeXBlIjoiQUNDRVNTIiwiZXhwIjo0Nzk4NTI0MTg2LCJpYXQiOjE2NDQ5MjQxODYsImp0aSI6InNwcmlua2xyIn0.j1Kv-WunSA0q8M7-6zE3pvZdA-MRj0u7lNUJ-sUvrWedDAEZ_l6UjGbMgu7REJdlEk2vBpXY3Xpsc72adoursaoQtsRPW4h3D1vaFp0fuJQmnTZzQZopKaPDkCLO8YGGQHk0V3LiHb6D-qcjjmIKTuJpmrSrh4OzUekRw2tJWez_-ff93kkPuqRLhHkpI6Ua93roOd9yX78RsWNXwHu-m8-e5I3pg4VZ_SucBy6j1jHiBcJUpWO9qE17ZGh5Cc2uP1_dUJlr48dWVDbBi49eIicuiMXOFubsl-xGvO7pUkbCR10BvNjgExTCw3z1Glbm6-ZZahyHHLnn7XPBGAlqJA&language=pt-BR" className="text-sm pt-1">
              Contato direto via Email SAMSUNG
            </a>
          </span>
          <span className="flex gap-2">
            <i className="fa-solid fa-phone-volume text-white text-xl" />
            <a href="tel:4004-0000" className="text-sm pt-1">
              4004-0000 (Capitais e grandes centros)
            </a>
          </span>
          <span className="flex gap-2">
            <i className="fa-solid fa-phone-volume text-white text-xl" />
            <a href="tel:0800 555 0000" className="text-sm pt-1">
              0800 555 0000 (Demais
              cidades e regiões)
            </a>
          </span>
          <div className="w-full grid grid-cols-3 mt-4">
            <a
              href="https://www.facebook.com/SamsungBrasil"
              target="_blank"
              rel="noreferrer"
            >
              <i className="icon fa-brands fa-facebook-f" />
            </a>
            <a
              href="https://twitter.com/SamsungBrasil"
              target="_blank"
              rel="noreferrer"
            >
              <i className="icon fa-brands fa-twitter" />
            </a>
            <a
              href="https://www.instagram.com/samsungbrasil/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="icon fa-brands fa-instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between gap-4">
        <p className="text-gray-400 text-xs"></p>
        <a
          className="text-gray-400 text-xs"
          target="_blank"
          rel="norefereer"
          href="https://www.instagram.com/_sam.lor/"
        >
          Desenvolvido por <span className="underline">Samuel Lucas</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
