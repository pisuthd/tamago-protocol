import styled from "styled-components";


export const Button = styled.button`
    padding: 10px 20px;
    border: 0px;
    border-radius: 5px;
    box-shadow: 5px 5px black;
`

export const ToggleButton = styled(Button)`
    opacity: 0.6;
   :hover {
          background: white;
          color: #333;
        }
          ${props => props.active && `
          opacity: 1;
      background: white;
      color: #333;
  
    `}
`