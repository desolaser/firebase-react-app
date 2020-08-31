import React from 'react'
import styled from 'styled-components'
import { useFirebase } from 'firebase_context'
import {
    StyledUl,
    StyledLi,
    StyledElement,
    StyledField,
    StyledButton
} from 'components/styled_list'

const StyledProducts = styled.div`
    margin-left: 2rem;
`

const StyledProductItem = styled.div`
    margin-left: 4rem;
`

const BudgetsList = ({ data, history }) => {
    const firebase = useFirebase()

    const editBudgets = id => {
        history.push(`/edit_budget/${id}`)
    }
    
    const deleteBudgets = id => {
        firebase.budget(id).remove()
        alert("Budget deleted successfully")
    }

    return (
        <StyledUl>
            {data.map(item => (
                <StyledLi key={item.id}>
                    {Object.entries(item).map((itemData, index) => 
                        itemData[0] === "products" 
                            ? (
                                <div key={index}>
                                    <StyledElement>
                                        <StyledField>products</StyledField>
                                    </StyledElement>
                                    <StyledProducts>
                                    {itemData[1].map((product, index) => (
                                        <div key={index}>
                                            {`Product ${index + 1}`} 
                                            <StyledProductItem key={product.id + 1}>
                                                <StyledField>Id: </StyledField>{" " + product.id}
                                            </StyledProductItem>
                                            <StyledProductItem key={product.id + 2}>
                                                <StyledField>Name: </StyledField>{" " + product.name}
                                            </StyledProductItem>
                                            <StyledProductItem key={product.id + 3}>
                                                <StyledField>Price: </StyledField>{" " + product.price}
                                            </StyledProductItem>
                                            <StyledProductItem key={product.id + 4}>
                                                <StyledField>Quantity: </StyledField>{" " + product.quantity}
                                            </StyledProductItem>
                                        </div>
                                    ))}
                                    </StyledProducts> 
                                </div>                             
                            )
                            : (
                                <StyledElement key={index}>
                                    <StyledField>{itemData[0]}: </StyledField>{" " + itemData[1]}
                                </StyledElement>
                            )
                    )}
                    <StyledButton color="tomato" textColor="white" onClick={() => deleteBudgets(item.id)}>Delete</StyledButton>
                    <StyledButton color="dodgerblue" textColor="white" onClick={() => editBudgets(item.id)}>Edit</StyledButton>
                </StyledLi>
            ))}
        </StyledUl>
    )
}

export default BudgetsList