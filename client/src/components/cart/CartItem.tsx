import styled from 'styled-components'

const CartItem = () => {
  return (
    <Container>
      <ImageContainer> 
        <img src={"https://m.media-amazon.com/images/I/619shoWIJYL._AC_AA180_.jpg"}></img>
      </ImageContainer>

      <CartItemInfo> 

        <CartItemInfoTop>
            <h2>roborock S8 Pro Ultra Robot Vacuum and Mop, Auto Drying, Auto Mop Washing, Self Emptying, Self Refilling, Liftable Dual Brush & Sonic Mop, 6000Pa Suction, Smart Obstacle Avoidance, Black</h2>
        </CartItemInfoTop>

        <CartItemInfoBottom>
        <CartItemQuantityContainer>5 </CartItemQuantityContainer>
        <CartItemDeleteContainer> Delete</CartItemDeleteContainer>
        </CartItemInfoBottom>
      </CartItemInfo>

<CartItemPrice>
    $999
</CartItemPrice>
    </Container>
  )
}

export default CartItem


const Container= styled.div`
padding-top:12px;
padding-bottom:12px;
display:flex;
`
const ImageContainer= styled.div`
width:180px;
height:180px;
flex-shrink:0;
flex-grow:0;
margin-right:16px;
img{
object-fit:contain;
height:100%;
width:100%;

}
`
const CartItemInfo = styled.div``

const CartItemInfoTop= styled.div`

color: #007185;
h2{
    font-size: 16px;
}
`

const CartItemInfoBottom= styled.div`
display:flex;
margin-top:4px;`

const CartItemQuantityContainer= styled.div``

const CartItemDeleteContainer= styled.div`
color:#007185;
margin-left: 16px;
cursor:pointer; 
`

const CartItemPrice=styled.div`
font-size :16px;
font-weight:700;
margin-left:16px;
`