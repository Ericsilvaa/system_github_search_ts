import styled, {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body{
    font-family: sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }


`


export const Container = styled.section`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1rem;
  background-color: white;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   */

`

