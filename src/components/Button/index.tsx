import React, { ReactNode } from 'react'
// import { Button } from '../../config/styles/GlobalStyle'

// COMO HERDAR PROPRIEDADES NO STYLED COMPONENT

type Props = {
  children: ReactNode
}

const Button = ({children}: Props) => {
  return (
    <button>{children}</button>
  )
}

export default Button