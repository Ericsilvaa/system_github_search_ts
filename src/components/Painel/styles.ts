import styled from 'styled-components'

export const Container = styled.section`
  border-radius: 15px;
  background: ${props => props.theme.colors.primary_bg_color};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.20);
  padding: 35px 20px;
  margin: 25px 0;
  display: grid;
  grid-template-columns: 200px 1fr;
  

`