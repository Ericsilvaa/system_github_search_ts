import React from 'react'
import * as C from './styles'

// components
import Perfil from './perfil'
import Info from './infos'
import { useSelector } from 'react-redux'



const Painel = () => {

  const {loadUser} = useSelector(state => state.user)

  return (
    <C.Container>
      {/* CONTAINER DA IMAGEM*/}
      <Perfil url={loadUser.avatar_url} />


      {/* CONTAINER DAS INFORMAÇÕES */}
      <Info />
    </C.Container>
  )
}

export default Painel