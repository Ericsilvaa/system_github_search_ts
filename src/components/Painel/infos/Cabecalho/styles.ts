import styled from 'styled-components'

export const AreaDescription = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h3 {
      color: ${props => props.theme.colors.color_primary};
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 5px;
    }

    .created {
      color: ${props => props.theme.colors.color_blue_button};
      font-size: 0.975rem;
    }

    .redesocial {
      color: #0079FF;
      font-size: 0.875rem;
    }

    p {
      color:  ${props => props.theme.colors.color_secondary};
      font-size: 0.945rem;
      line-height: 25px; /* 166.667% */
      margin-top: 20px;
    }
  
  ;
`