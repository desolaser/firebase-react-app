import styled from 'styled-components'

const FormControl = styled.div`
    margin: 1rem 0;
`

const FormLabel = styled.label`
    display: block;
    margin-bottom: 0.5rem;
`

const FormInput = styled.input`
    width: 100%;
    padding: .5rem;
    font-size: 1rem;
`

const FormContainer = styled.form`
    box-shadow: 0px 2px 6px #777777;
    border-radius: 10px;
    width: 750px;
    margin: auto;
    padding: 3rem;
`

const FormButton = styled.button`
    display: block;
    border: none;
    border-radius: 10px;
    background-color:  ${props => props.disabled ? 'grey' : 'dodgerblue'} ;
    color: white;
    padding: 1rem;
    margin: auto;
`

const FormTitle = styled.div`
    font-size: 2rem;
`

export { FormControl, FormLabel, FormInput, FormContainer, FormButton, FormTitle }