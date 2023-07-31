import React from 'react'
import * as C from './styles'

// components
import Perfil from './perfil'
import Info from './infos'
import { useSelector } from 'react-redux'

const url = "https://s3-alpha-sig.figma.com/img/8859/ea3e/c9df73994117881587b8837cdf38354a?Expires=1691971200&Signature=Qjtq4TElDKslA55xW1xIne1eUh1IZkE1bdHMXoDnA4qHrR0Wl2hUeGFSkAtG2bmyQquMApTKb1bFPf~bpdGMDX2p9Ty3jD1eOnIpF399BAbvxpUfg9SyNqslwCCpQcUxuP0PLv8aRojt0UPfYf2Pp5~vGyfJQxiCksVPhScFbRSVAYuKOIKQK9YyVvBA4YlKBsRLl-Pej~DE-VYRRcrAg9Cj6wmgBJG7ZtSrPfN95Uo0Wds-d2Oo1rO~1GMzEwxx4fortP1fmXfHBqWItY1xranG86~2xwTPCyMg3c8xD7RfXpg1RBB~8N7povPc~WNoMdhnyg-ZSw2l6NWtHBCL3g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"



type Props = {}

const Painel = (props: Props) => {

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