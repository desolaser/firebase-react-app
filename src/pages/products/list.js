import React from 'react'
import { useFirebase } from 'firebase_context'
import {
    StyledUl,
    StyledLi,
    StyledElement,
    StyledField,
    StyledButton
} from 'components/styled_list'

const ProductsList = ({ data, history }) => {
    const firebase = useFirebase()

    const editProduct = id => {
        history.push(`/edit_product/${id}`)
    }
    
    const deleteProducts = id => {
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
                    <StyledButton color="tomato" textColor="white" onClick={() => deleteProducts(item.id)}>Delete</StyledButton>
                    <StyledButton color="dodgerblue" textColor="white" onClick={() => editProduct(item.id)}>Edit</StyledButton>
                </StyledLi>
            ))}
        </StyledUl>
    )
}

export default ProductsList