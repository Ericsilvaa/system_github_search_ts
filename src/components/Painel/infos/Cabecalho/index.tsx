import React from 'react'
import * as C from './styles'

type Props = {}

const Cabecalho = (props: Props) => {
  return (
    <C.AreaDescription>
    <div>
      <h3>The Octocat</h3>
      <span className="created">Joined 25 Jan 2011</span>
    </div>
    <span className="redesocial">@octocat</span>
    <p>This profile has no bio</p>
  </C.AreaDescription>
  )
}

export default Cabecalho