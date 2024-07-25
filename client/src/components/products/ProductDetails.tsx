import styled from 'styled-components'


import type { paths, components } from "../../types/types";
//⭐⭐⭐⭐⭐

type ProductDetailsType = components["schemas"]["ProductDetailsResponse"];
type EndpointParams = paths["/api/products/{product_id}"]["parameters"];

function Product() {
  return (
    <Container>
      <AttachmentsContainer>Attachments</AttachmentsContainer>
      <InfoContainer>Info</InfoContainer>
    </Container>
  )
}

export default Product

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: blue;
  justify-content: space-around;
`

const AttachmentsContainer = styled.div`
display: flex;`

const InfoContainer = styled.div`
display: flex;`
