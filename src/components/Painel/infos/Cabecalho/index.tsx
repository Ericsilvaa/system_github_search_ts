import React from "react";
import * as C from "./styles";
import { useAppSelector } from "../../../../redux/store.hooks";
import { getStateUser } from "../../../../redux/user/slice";

const Cabecalho = () => {
  const { user } = useAppSelector(getStateUser);

  return (
    <C.AreaDescription>
      <div>
        <h3>{user.name}</h3>
        {user.created_at && (
          <span className="created">Joined {user.created_at}</span>
        )}
      </div>
      <span className="redesocial">@{user.login}</span>
      <p>{user.bio ? `${user.bio}` : "This profile has no bio"}</p>
    </C.AreaDescription>
  );
};

export default Cabecalho;
