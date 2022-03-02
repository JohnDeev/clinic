import React, { Component, useState } from "react";
import { withRouter } from "react-router-dom";
import { ListItem, ListItemText } from "@material-ui/core";
import AppFrame from "../AppFrame";
//import WebActions from '../WebActions';
import FrontPage from "./../MaterialComponents/FrontPage";
import WebBar from "../MaterialComponents/WebBar";

import fachada from "./../../img/fachadasism2.jpg";
import BodyIndex from "../views/BodyIndex";

import EnterpriseValue from "./../views/EnterpriseValue";
import Home from "./../views/Home";
import ButtonMenuApps from "../MaterialComponents/ButtonMenuApps";
import { ScheduleModal } from "../../components/ScheduleModal";
import { useHistory } from "react-router";

const HomeContainer = (props) => {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleOnClickHome = () => {
    console.log(`/home`);
    history.push("/");
  };

  const handleOnClickAbout = () => {
    console.log(`/quienessomos`);
    history.push("/quienessomos");
  };

  const handleOnClickPortFolio = () => {
    console.log(`/portafolio`);
    history.push("/portafolio");
  };

  const handleOnClickContact = () => {
    console.log(`/contacto`);
    history.push("/contacto");
  };
  //   const handleOnClickCitas = () => {
  //     const win = window.open(
  //       "https://api.whatsapp.com/send?phone=+573105438731&text= Buenas,%20deseo%20apartar%20una%20cita%20médica.",
  //       "_blank"
  //     );
  //     win.focus();
  //   };

  return (
    <div>
      <AppFrame
        header={<FrontPage imagen={fachada} openModal={openModal} />}
        bar={
          <div>
            <WebBar
              container
              botones={
                <div>
                  <ButtonMenuApps />
                </div>
              }
              enlaces={
                <div>
                  {[
                    { name: "Inicio", accion: () => handleOnClickHome() },
                    { name: "¿Quienes somos?", accion: () => handleOnClickAbout() },
                    { name: "Nuestros servicios", accion: () => handleOnClickPortFolio() },
                    { name: "Contacto", accion: () => handleOnClickContact() },
                  ].map((item, key) => (
                    <ListItem button key={item.name}>
                      <ListItemText primary={item.name} onClick={item.accion} />
                    </ListItem>
                  ))}
                </div>
              }
            ></WebBar>
          </div>
        }
        body={
          <div>
            <BodyIndex
              contenido={
                <div>
                  <Home />
                  <EnterpriseValue />
                  <ScheduleModal showModal={showModal} setShowModal={setShowModal} />
                </div>
              }
            />
          </div>
        }
      />
    </div>
  );
};

export default withRouter(HomeContainer);
