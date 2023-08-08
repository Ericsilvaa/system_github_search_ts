import React from "react";
import * as C from "./styles";
import IUser from "../../../../interfaces/IUser";

type Props = {
  loadUser: IUser;
};

const Cabecalho = ({ loadUser }: Props) => {
  const { created_at, name, bio, login } = loadUser;

  return (
    <C.AreaDescription>
      <div>
        <h3>{name}</h3>
        <span className="created">{created_at}</span>
      </div>
      <span className="redesocial">@{login}</span>
      <p>{bio ? `${bio}` : "This profile has no bio"}</p>
    </C.AreaDescription>
  );
};

export default Cabecalho;
