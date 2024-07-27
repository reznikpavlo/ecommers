import React from 'react'
import styled from'styled-components'
import PromotionBox from './PromotionBox'
import CartItems from './CartItems'
import CartTotal from './CartTotal'
const Cart: React.FC = () => {
    return (
      <div className="App">
        <PromotionBox/>
       

        <Container>
          <CartItems />
          <CartTotal/>
        </Container>
        </div>
)
}
export default Cart

const Container =styled.div`
display:flex;
padding: 14px 18px 0 18px;
`