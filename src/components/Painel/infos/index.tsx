import React from "react";
import * as C from "./styles";
import { useSelector } from "react-redux";
import Dashboard from "./Dashboard";
import Redes from "./RedesSociais";
import Cabecalho from "./Cabecalho";
import IUser from "../../../interfaces/IUser";

type Props = {};

const Info = (props: Props) => {
  const { loadUser } = useSelector((state) => state.user);

  console.log(loadUser);
  return (
    <C.Container>
      {/* cabecalho */}
      <Cabecalho loadUser={loadUser} />

      {/* dashboard */}
      <C.Dashboard>
        <Dashboard name="Repos" numero={loadUser.public_repos} />
        <Dashboard name="Followers" numero={loadUser.followers} />
        <Dashboard name="Following" numero={loadUser.following} />
      </C.Dashboard>

      {/* redesociais */}
      <C.RedesSociais>
        <Redes description={loadUser.location} />
        <Redes description="Not Available" />
        <Redes description={loadUser.blog} />
        <Redes description={loadUser.url} />
      </C.RedesSociais>
    </C.Container>
  );
};

export default Info;
