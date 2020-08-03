import React from 'react'
import { useFirebase } from '../firebase'
import {
    StyledUl,
    StyledLi,
    StyledElement,
    StyledField,
    StyledButton
} from './styled_list'

const BudgetsList = ({ data, history }) => {
    const firebase = useFirebase()

    const editBudgets = id => {
        history.push(`/edit_product/${id}`)
    }
    
    const deleteBudgets = id => {
        firebase.product(id).remove()
        alert("Product deleted successfully")
    }

    return (
        <StyledUl>
            {data.map(item => (
                <StyledLi key={item.id}>
                    {Object.entries(item).map((itemData, index) => (
                        <StyledElement key={index}>
                            <StyledField>{itemData[0]}: </StyledField>{" " + itemData[1]}
                        </StyledElement>
                    ))}
                    <StyledButton color="tomato" textColor="white" onClick={() => deleteBudgets(item.id)}>Delete</StyledButton>
                    <StyledButton color="dodgerblue" textColor="white" onClick={() => editBudgets(item.id)}>Edit</StyledButton>
                </StyledLi>
            ))}
        </StyledUl>
    )
}

export default BudgetsList