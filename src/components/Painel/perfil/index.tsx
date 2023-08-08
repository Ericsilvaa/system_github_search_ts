import React from "react";
import * as C from "./styles";
import { useAppSelector } from "../../../redux/store.hooks";
import { getStateUser } from "../../../redux/user/slice";

const Perfil = () => {
  const { user } = useAppSelector(getStateUser);
  return (
    <C.Container>
      <img src={user.avatar_url} alt="foto tal" />
    </C.Container>
  );
};

export default Perfil;
