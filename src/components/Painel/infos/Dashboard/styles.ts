import styled from 'styled-components'


export const Dashboard = styled.div`
  h3 {
    color: ${props => props.theme.colors.color_secondary};
    font-size: 0.795rem;
  }
  span {
    color: ${props => props.theme.colors.color_primary};
    font-size: 1.3rem;
    font-weight: 700;
    text-transform: uppercase;
  }

`

