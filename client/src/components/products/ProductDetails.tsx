import styled from 'styled-components'
import { useState, useEffect } from 'react';
import { GET_PRODUCT_BY_ID } from '../../routing/APIEndpoints';
import { productDetailsMock } from './ProductDetailsMock';


import type { paths, components } from "../../types/types";
//⭐⭐⭐⭐⭐

function Product() {
  type ProductDetailsType = components["schemas"]["ProductDetailsResponse"];
  type EndpointParams = paths["/api/products/{product_id}"]["parameters"];


  const [productDetails, setProductDetails] = useState<null | ProductDetailsType>(null);

  const fetchProductDetails = async () => {
    const url = GET_PRODUCT_BY_ID("product_id");
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setProductDetails(json);
    } catch (error) {
      setProductDetails(productDetailsMock);
      console.error("Couldn't load product!");
    }
  }

  useEffect(() => {
    if (productDetails === null) fetchProductDetails();
    console.log(productDetails);
  }, [productDetails, fetchProductDetails]);

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
