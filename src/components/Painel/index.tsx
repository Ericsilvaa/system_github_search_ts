import React from "react";
import * as C from "./styles";

// components
import Perfil from "./perfil";
import Info from "./infos";

const Painel = () => {
  return (
    <C.Container>
      {/* CONTAINER DA IMAGEM*/}
      <Perfil />

      {/* CONTAINER DAS INFORMAÇÕES */}
      <Info />
    </C.Container>
  );
};

export default Painel;
