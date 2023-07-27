import React from 'react'
import * as C from './style'
import Header from '../../components/Header'
import SearchUser from '../../components/Search'

type Props = {}

const Home = (props: Props) => {
  return (
    <C.Container>
      {/* 3 areas principais -> Todas Column */}

      {/* 1º Header */}
      <Header />

      {/* 2° Barra de Pesquisa e Button */}
      <SearchUser />

      {/* painel da pesquisa - esse cara será flex 1 */}

    </C.Container>
  )
}

export default Home