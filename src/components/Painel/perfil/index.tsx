import React from 'react'
import * as C from './styles'


type Props = {
  url: string

}

const Perfil = ({url}: Props) => {
  return (
    <C.Container>
      <img src={url} alt="foto tal" />
    </C.Container>
  )
}

export default Perfil