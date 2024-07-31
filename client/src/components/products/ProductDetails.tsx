import styled from 'styled-components'
import { useState, useEffect } from 'react';
import { GET_PRODUCT_BY_ID } from '../../routing/APIEndpoints';
import { productDetailsMock } from './ProductDetailsMock';

//import type { paths, components } from "../../types/types";
import type { components } from "../../types/types";
//⭐⭐⭐⭐⭐

const defaultImg = "https://www.firefoxwildfire.com/wp-content/plugins/nimble-builder/assets/img/default-img.png";

function Product() {
  type ProductDetailsType = components["schemas"]["ProductDetailsResponse"];
  //type EndpointParams = paths["/api/products/{product_id}"]["parameters"];


  const [productDetails, setProductDetails] = useState<null | ProductDetailsType>(null);
  const [mainImage, setMainImage] = useState<null | string>(null);

  useEffect(() => {
    const mainImgIsSet = mainImage !== null;
    const productHasAttachments = productDetails?.attachments[0] !== undefined;
    if (!mainImgIsSet && productHasAttachments) {
      setMainImage(productDetails.attachments[0])
    }
  }, [productDetails]);


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
              return <Icon src={img} alt="Product Icon" onMouseEnter={() => setMainImage(img)} />
            })
          }
        </IconsContainer>
        <MainImgContainer>
          <MainImg src={mainImage ?? defaultImg} alt="Product Main Image" />
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
`

const AttachmentsContainer = styled.div`
display: flex;
width: 50%;
background-color: yellow;`

const IconsContainer = styled.div`
display: flex;
flex-direction: column;
width: 20%;
border: 2px solid black;`

const MainImgContainer = styled.div`
  display: flex;
  width: 30%;
  overflow: hidden;
  background-color: red;
  align-items: center; /* Center items vertically */
  justify-content: center; /* Center items horizontally */
`;

const Icon = styled.img`
display: flex;
width: 50px;
border: 2px solid green;`

const MainImg = styled.img`
display: flex;
width: 100%;
object-fit: contain;`

const InfoContainer = styled.div`
display: flex;`