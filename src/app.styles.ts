import styled from 'styled-components'


export const Container = styled.div<{dark: boolean}>`
  min-height: 100vh;
  background: ${props => props.dark ? '#141D2F' : '#F6F8FF'};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Area = styled.div`
  width: 750px;
  display: flex;
`