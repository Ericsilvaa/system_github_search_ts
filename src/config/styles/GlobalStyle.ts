import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
`


export const Button = styled.button`
  border-radius: 10px;
  background-color: #0079FF;
	padding: 10px 20px;
	font-size: 1.1rem;
  font-weight: 700;
	color: #fff;
	outline: none;
	cursor: pointer;
	/* border: 2px solid #fff; */

  &:hover {
    background: #60ABFF;
  }



`