import styled from 'styled-components'
import CartItem from './CartItem'

function CartItems() {
  return (
    <Container>
    <Title> Shopping Cart   </Title>
    <hr/>
    <ItemsContainer>
        <CartItem/>

    </ItemsContainer>

    </Container>
  )
}

export default CartItems

const Container = styled.div`

flex:0.8;
height:300px;
background-color:white;
padding:20px;
margin-right:18px;
`
const Title =styled.div`
font-weight:bold;
`
const ItemsContainer= styled.div``
