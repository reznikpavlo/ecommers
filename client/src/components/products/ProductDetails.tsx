import styled from 'styled-components'

import type { paths, components } from "../../types/types";

type ProductDetailsType = components["schemas"]["ProductDetailsResponse"];
type EndpointParams = paths["/api/products/{product_id}"]["parameters"];

function Product() {
  return (
    <Container>
      <Title>Dell Laptop Pro</Title>
      <Price>$1999</Price>
      <Rating>⭐⭐⭐⭐⭐</Rating>
      <Image src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
      <ActionCenter>
        <AddToCartButton>Add to Cart</AddToCartButton>
      </ActionCenter>
    </Container>
  )
}

export default Product

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 100;
  max-height: 500px;
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
`

const Title = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`

const Price = styled.span`
  font-weight: 500;
  margin-top: 3px;
  font-size: 20px;
  color: #b12704;
`

const Rating = styled.div`
  margin: 10px 0;
  font-size: 18px;
  color: #ffa41c;
`

const Image = styled.img`
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
`

const AddToCartButton = styled.button`
  height: 30px;
  width: 100px;
  background-color: #f0c14b;
  border: 2px solid #a88734;
  border-radius: 2px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: #ddb347;
  }
`

const ActionCenter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;
`
