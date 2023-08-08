import React from "react";
import * as C from "./styles";
import Dashboard from "./Dashboard";
import Redes from "./RedesSociais";
import Cabecalho from "./Cabecalho";
import { useSelector } from "react-redux";
import IUser from "../../../interfaces/IUser";
import { useAppSelector } from "../../../redux/store.hooks";
import { getStateUser } from "../../../redux/user/slice";

type Props = {};

const Info = (props: Props) => {
  const { user: loadUser } = useAppSelector(getStateUser);

  console.log(loadUser);
  return (
    <C.Container>
      {/* cabecalho */}
      <Cabecalho />

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
