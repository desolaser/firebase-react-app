import styled from 'styled-components'

const Alert = styled.div`
    background-color: ${({ color }) => color ? color : "tomato"};
    color: ${({ textColor }) => textColor ? textColor : "white"};
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 2px 2px #aaaaaa;
    margin-top: 2rem;
`

export default Alert