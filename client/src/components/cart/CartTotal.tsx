import styled from 'styled-components'


function CartTotal() {
  return (
    <Container>
<Title> Cart Total  </Title>
<hr/>
    </Container>
  )
}
  
export default CartTotal


const Container = styled.div `
height:200px;
flex:0.2;
padding:20px;
background-color:white;
`
const Title= styled.div`
font-weight:bold;
`