import styled from 'styled-components'

export const Container = styled.section`
  border-radius: 15px;
  background: #FEFEFE;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.20);
  padding: 15px 0px;
`

export const AreaSearch = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr 150px;
  gap: 10px;
  padding: 0px 15px;

  div > svg {
    width: 23px;
    height: 23px;

    &:hover {
      box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.20);
    }

  }

  input {
    color: #4B6A9B;
    background-color: transparent;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 25px; /* 138.889% */
    outline: none;
    border: none;
  }


`