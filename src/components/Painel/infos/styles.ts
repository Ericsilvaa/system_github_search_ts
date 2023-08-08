import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

`

export const Dashboard = styled.div`
  border-radius: 10px;
  background: ${props => props.theme.colors.color_dashbord};
  height: 85px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

`
export const RedesSociais = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;




`