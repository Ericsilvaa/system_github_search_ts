import React from "react";
import * as C from "./styles";
import Dashboard from "./Dashboard";
import Redes from "./RedesSociais";
import Cabecalho from "./Cabecalho";

type Props = {};

const Info = (props: Props) => {
  return (
    <C.Container>
      {/* cabecalho */}
      <Cabecalho />

      {/* dashboard */}
      <C.Dashboard>
        <Dashboard name="Repos" numero="8" />
        <Dashboard name="Followers" numero="3938" />
        <Dashboard name="Following" numero="9" />
      </C.Dashboard>

      {/* redesociais */}
      <C.RedesSociais>
        <Redes description="San Francisco" />
        <Redes description="Not Available" />
        <Redes description="https://github.blog" />
        <Redes description="@github" />
      </C.RedesSociais>
    </C.Container>
  );
};

export default Info;
