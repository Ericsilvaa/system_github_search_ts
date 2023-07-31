import React from 'react'
import * as C from './styles'

type Props = {
  name: string;
  numero: number;
}

const Dashboard = ({name, numero}: Props) => {
  return (
      <C.Dashboard>
          <h3>{name}</h3>
          <span>{numero}</span>
      </C.Dashboard>
  )
}

export default Dashboard