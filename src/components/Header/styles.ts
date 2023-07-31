import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`

export const Logo = styled.h2`
  color: #222731;
  font-size: 1.5rem;
  font-weight: 700;
`

export const ToggleButton = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  cursor: pointer;

  color: #697C9A;
  span {
    font-size: 0.825rem;
    letter-spacing: 1.5px;
    font-weight: 700;
  }

  div {
    width: 20px;
    height: 20px;
    
  }

  &:hover {
    color: #222731;
  }



`