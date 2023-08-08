import styled from 'styled-components'

export const Container = styled.section`
  border-radius: 15px;
  background: ${props => props.theme.colors.primary_bg_color};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.20);
  padding: 5px 0px;
`

export const AreaSearch = styled.div`
  display: grid;
  grid-template-columns:  30px 1fr 70px 100px;
  align-items: center;
  gap: 10px;
  padding: 0px 20px;

  div > svg {
    width: 23px;
    height: 23px;

    &:hover {
      box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.20);
    }

  }

  input {
    background-color: transparent;
    color:  ${props => props.theme.colors.color_secondary};
    font-size: 0.925rem;
    line-height: 25px; /* 138.889% */
    outline: none;
    border: none;

    &::placeholder{
      color:  ${props => props.theme.colors.color_secondary};
    }
  }

  button {
    cursor: pointer;
    border-radius: 10px;
    background: #0079FF;
    border: none;
    color: #FFF;
    font-size: 0.875rem;  
    font-weight: 700;
    width: 106px;
    height: 50px;
    
    &:hover {
      background-color: #60ABFF;
      transition: all 0.3s;
    }
  }

`

export const Error = styled.div`
  span {
    font-size:0.775rem ;
    font-weight: bold;
    color: ${props => props.theme.colorsInfo.error};
  }
`