import styled from 'styled-components'

const Panel = styled.div`
    box-shadow: 0px 2px 6px #777777;
    border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : "10px"};
    width: ${({ width }) => width ? width : "750px"};
    margin: ${({ margin }) => margin ? margin : "2rem auto"};
    padding: ${({ padding }) => padding ? padding : "3rem"};
`

export default Panel