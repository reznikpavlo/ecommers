import styled from 'styled-components'
import { useState, useEffect } from 'react';
import { GET_PRODUCT_BY_ID } from '../../routing/APIEndpoints';
import { productDetailsMock } from './ProductDetailsMock';

//import type { paths, components } from "../../types/types";
import type { components } from "../../types/types";
//⭐⭐⭐⭐⭐

function Product() {
  type ProductDetailsType = components["schemas"]["ProductDetailsResponse"];
  //type EndpointParams = paths["/api/products/{product_id}"]["parameters"];


  const [productDetails, setProductDetails] = useState<null | ProductDetailsType>(null);


  useEffect(() => {

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

    if (productDetails === null) fetchProductDetails();
    console.log(productDetails);
  }, [productDetails]);

  return (
    <Container>
      <AttachmentsContainer>
        <IconsContainer>
          {
            productDetails?.attachments.map(img => {
              return <Icon src={img} />
            })
          }
        </IconsContainer>
        <MainImgContainer>
          <MainImg src={productDetails?.attachments[0]} />
        </MainImgContainer>
      </AttachmentsContainer>
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
display: flex;
width: 50%;`

const IconsContainer = styled.div`
display: flex;
flex-direction: column;
width: 30%;`

const Icon = styled.img`
display: flex;
width: 100%;`

const MainImgContainer = styled.div`
display: flex;
width: 60%;`

const MainImg = styled.img`
display: flex;`

const InfoContainer = styled.div`
display: flex;`
