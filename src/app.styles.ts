import styled from 'styled-components'


export const Container = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.secondary_bg_color};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Area = styled.div`
  width: 750px;
  display: flex;
`